// Builds the new site for every locale in build/site/content/<lang>/ (homepage, /guides/*, /faq/*).
// Languages without content there are still built from build/template.html by build/build.js.
const fs = require('fs');
const path = require('path');
const { SITE_URL, LOCALES } = require('./site/config');
const { URLS } = require('./constants');
const { makePages } = require('./site/pages');

const ROOT = path.join(__dirname, '..');
const SITE_LANGS = Object.keys(LOCALES).filter((l) => fs.existsSync(path.join(__dirname, 'site', 'content', l, 'home.js')));

const content = Object.fromEntries(SITE_LANGS.map((l) => [l, {
    home: require(`./site/content/${l}/home`),
    guides: require(`./site/content/${l}/guides`),
    faqs: require(`./site/content/${l}/faq`)
}]));
const idOf = (x) => x.id || x.slug;

// Page key -> [{lang, url}] for hreflang
function buildAlternates() {
    const map = {};
    const add = (key, lang, p) => { (map[key] = map[key] || []).push({ lang, url: SITE_URL + p.replace(/^\//, '') }); };
    for (const u of URLS) (map.home = map.home || []).push({ lang: u.lang, url: u.url });
    for (const l of SITE_LANGS) {
        const base = LOCALES[l].base;
        add('guides-hub', l, `${base}guides/`);
        add('faq-hub', l, `${base}faq/`);
        content[l].guides.forEach((g) => add(`guide:${idOf(g)}`, l, `${base}guides/${g.slug}/`));
        content[l].faqs.forEach((f) => add(`faq:${idOf(f)}`, l, `${base}faq/${f.slug}/`));
    }
    return map;
}

function pageList() {
    const out = [];
    for (const l of SITE_LANGS) {
        const b = LOCALES[l].base;
        out.push({ lang: l, path: b, priority: l === 'en' ? '1.0' : '0.9' });
        out.push({ lang: l, path: `${b}guides/`, priority: '0.8' });
        content[l].guides.forEach((g) => out.push({ lang: l, path: `${b}guides/${g.slug}/`, priority: '0.8' }));
        out.push({ lang: l, path: `${b}faq/`, priority: '0.7' });
        content[l].faqs.forEach((f) => out.push({ lang: l, path: `${b}faq/${f.slug}/`, priority: '0.6' }));
    }
    return out;
}

function write(relPath, html, version) {
    const out = path.join(ROOT, relPath, 'index.html');
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, html.replace(/\{\{VERSION\}\}/g, version), 'utf8');
}

function lint(l) {
    const { home, guides, faqs } = content[l];
    const all = [
        { title: home.title, description: home.description, where: 'home' },
        ...guides.map((g) => ({ title: g.title, description: g.description, where: g.slug })),
        ...faqs.map((f) => ({ title: f.title, description: f.description, where: f.slug }))
    ];
    const warn = [];
    const dupe = (k) => { const s = new Set(); all.forEach((p) => { if (s.has(p[k])) warn.push(`duplicate ${k}: ${p[k]}`); s.add(p[k]); }); };
    dupe('title'); dupe('description');
    for (const p of all) {
        if (p.title.length > 70) warn.push(`${p.where}: title ${p.title.length} chars (>70)`);
        if (p.description.length > 165) warn.push(`${p.where}: description ${p.description.length} chars (>165)`);
    }
    const gIds = new Set(guides.map(idOf));
    const fIds = new Set(faqs.map(idOf));
    for (const g of guides) {
        g.related.forEach((r) => { if (!gIds.has(r)) warn.push(`${g.slug}: unknown related guide ${r}`); });
        g.faqLinks.forEach((r) => { if (!fIds.has(r)) warn.push(`${g.slug}: unknown faq ${r}`); });
    }
    faqs.forEach((f) => { if (!gIds.has(f.guide)) warn.push(`${f.slug}: unknown guide ${f.guide}`); });
    warn.forEach((w) => console.warn(`⚠️  [${l}] ${w}`));
    if (warn.length) process.exitCode = 1;
}

function build() {
    const version = String(Date.now());
    const today = new Date().toISOString().split('T')[0];
    const alternates = buildAlternates();
    for (const l of SITE_LANGS) {
        lint(l);
        const L = LOCALES[l];
        const P = makePages(L, { alt: (key) => alternates[key] || [] });
        const { home, guides, faqs } = content[l];
        const dir = L.base.replace(/^\//, '');
        write(dir, P.renderHome({ home, guides, faqs, today }), version);
        write(`${dir}guides`, P.renderGuidesHub({ guides, faqs, today }), version);
        guides.forEach((g) => write(`${dir}guides/${g.slug}`, P.renderGuide({ g, guides, faqs, today }), version));
        write(`${dir}faq`, P.renderFaqHub({ guides, faqs, today }), version);
        faqs.forEach((f) => write(`${dir}faq/${f.slug}`, P.renderFaq({ f, guides, faqs, today }), version));
        console.log(`✅ [${l}] home + ${guides.length} guides + ${faqs.length} FAQ pages`);
    }
    // urls.txt feeds IndexNow (build/indexnow.js)
    const urls = [
        ...pageList().map((p) => SITE_URL + p.path.replace(/^\//, '')),
        ...URLS.filter((u) => !SITE_LANGS.includes(u.lang)).map((u) => u.url)
    ];
    fs.writeFileSync(path.join(ROOT, 'urls.txt'), urls.join('\n'), 'utf8');
    console.log(`✅ urls.txt (${urls.length} URLs)`);
}

module.exports = { pageList, build, SITE_LANGS };
if (require.main === module) build();
