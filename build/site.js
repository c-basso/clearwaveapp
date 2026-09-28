// Builds the English site: homepage (/index.html), /guides/*, /faq/*.
// Other languages are still built from build/template.html by build/build.js.
const fs = require('fs');
const path = require('path');
const { SITE_URL } = require('./site/config');
const { URLS } = require('./constants');
const home = require('./site/content/home');
const guides = require('./site/content/guides');
const faqs = require('./site/content/faq');
const P = require('./site/pages');

const ROOT = path.join(__dirname, '..');

function pageList() {
    return [
        { path: '/', priority: '1.0' },
        { path: '/guides/', priority: '0.8' },
        ...guides.map((g) => ({ path: `/guides/${g.slug}/`, priority: '0.8' })),
        { path: '/faq/', priority: '0.7' },
        ...faqs.map((f) => ({ path: `/faq/${f.slug}/`, priority: '0.6' }))
    ];
}

function write(relPath, html, version) {
    const out = path.join(ROOT, relPath, relPath.endsWith('.html') ? '' : 'index.html');
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, html.replace(/\{\{VERSION\}\}/g, version), 'utf8');
    console.log(`✅ ${path.relative(ROOT, out)}`);
}

function checkUnique(list, key) {
    const seen = new Map();
    for (const item of list) {
        if (seen.has(item[key])) throw new Error(`Duplicate ${key}: "${item[key]}"`);
        seen.set(item[key], true);
    }
}

function lint() {
    const all = [
        { title: home.title, description: home.description, where: 'home' },
        ...guides.map((g) => ({ title: g.title, description: g.description, where: g.slug })),
        ...faqs.map((f) => ({ title: f.title, description: f.description, where: f.slug }))
    ];
    checkUnique(all, 'title');
    checkUnique(all, 'description');
    const warn = [];
    for (const p of all) {
        if (p.title.length > 65) warn.push(`${p.where}: title ${p.title.length} chars (>65)`);
        if (p.description.length > 160) warn.push(`${p.where}: description ${p.description.length} chars (>160)`);
    }
    const slugs = new Set(guides.map((g) => g.slug));
    const faqSlugs = new Set(faqs.map((f) => f.slug));
    for (const g of guides) {
        for (const r of g.related) if (!slugs.has(r)) warn.push(`${g.slug}: unknown related guide ${r}`);
        for (const r of g.faqLinks) if (!faqSlugs.has(r)) warn.push(`${g.slug}: unknown faq ${r}`);
    }
    for (const f of faqs) if (!slugs.has(f.guide)) warn.push(`${f.slug}: unknown guide ${f.guide}`);
    warn.forEach((w) => console.warn(`⚠️  ${w}`));
    if (warn.length) process.exitCode = 1;
}

function build() {
    lint();
    const version = String(Date.now());
    const today = new Date().toISOString().split('T')[0];
    write('', P.renderHome({ home, guides, faqs, today }), version);
    write('guides', P.renderGuidesHub({ guides, faqs, today }), version);
    guides.forEach((g) => write(`guides/${g.slug}`, P.renderGuide({ g, guides, faqs, today }), version));
    write('faq', P.renderFaqHub({ guides, faqs, today }), version);
    faqs.forEach((f) => write(`faq/${f.slug}`, P.renderFaq({ f, guides, faqs, today }), version));

    // urls.txt feeds IndexNow (build/indexnow.js): translated homepages + all English pages
    const urls = [
        ...pageList().map((p) => SITE_URL + p.path.replace(/^\//, '')),
        ...URLS.filter((u) => u.lang !== 'en').map((u) => u.url)
    ];
    fs.writeFileSync(path.join(ROOT, 'urls.txt'), urls.join('\n'), 'utf8');
    console.log(`✅ urls.txt (${urls.length} URLs)`);
}

module.exports = { pageList, build };
if (require.main === module) build();
