const R = require('./render');
const { APP, ASSETS, SCREENSHOTS, SITE_URL } = require('./config');
const { URLS } = require('../constants');
const { esc } = R;

const page = ({ headHtml, navKey, body, guides, faqs }) => `${headHtml}
<body>
${R.nav(navKey)}
<main id="main">
${body}
</main>
${R.footer(guides, faqs)}
${R.stickyBar()}
${R.scripts()}
</body>
</html>
`;

const faqItem = (f, open = false) => `
<details class="faq-item"${open ? ' open' : ''}>
    <summary><h3>${esc(f.question)}</h3><span class="faq-plus" aria-hidden="true"></span></summary>
    <div class="faq-a">
        <p>${f.short}</p>
        <a class="learn-more" href="/faq/${f.slug}/">Learn more<span class="sr-only"> about ${esc(f.question.replace(/\?$/, ''))}</span> <span aria-hidden="true">→</span></a>
    </div>
</details>`;

const guideCard = (g, i) => `
<a class="guide-card" href="/guides/${g.slug}/">
    <span class="guide-card__n">${String(i + 1).padStart(2, '0')}</span>
    <h3>${esc(g.h1)}</h3>
    <p>${esc(g.description)}</p>
    <span class="guide-card__go">Read guide <span aria-hidden="true">→</span></span>
</a>`;

// ---------------- Home ----------------
function renderHome({ home, guides, faqs, today }) {
    const h = home;
    const schema = [
        R.schemaApp(), R.schemaOrg(), R.schemaWebsite(),
        R.schemaHowTo({ name: 'How to get water out of an iPhone speaker with Clear Wave', description: h.how.sub, steps: h.how.steps, image: R.abs('/assets/appstore/screenshot-2-clear-780.webp') }),
        R.schemaFaq(faqs.map((f) => ({ q: f.question, a: f.short }))),
        R.schemaBreadcrumb([{ name: 'Clear Wave', path: '/' }])
    ];
    const shots = ['cover', 'clear', 'test', 'tone', 'meter'];
    const body = `
<section class="hero">
    <div class="hero__bg" aria-hidden="true"></div>
    <div class="wrap hero__grid">
        <div class="hero__copy">
            <div class="app-id">
                ${R.appIcon(52, 'app-id__icon', true)}
                <div>
                    <p class="app-id__name">${esc(APP.storeName)}</p>
                    <p class="app-id__meta">by Clear Wave · Free on the App Store</p>
                </div>
            </div>
            <h1><span class="grad">${esc(h.hero.h1Lead)}</span> ${esc(h.hero.h1Rest)}</h1>
            <p class="hero__sub">${esc(h.hero.sub)}</p>
            <div class="cta-row">
                ${R.badge('hero', 'store-badge--lg')}
                <div class="qr-block qr--desktop">
                    <img class="qr" src="${ASSETS.qr}" width="64" height="64" alt="Scan to download Clear Wave on the App Store">
                    <span>Scan with your<br>iPhone camera</span>
                </div>
            </div>
            <ul class="hero__facts">${h.hero.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>
        </div>
        <div class="hero__visual">
            <div class="hero__glow" aria-hidden="true"></div>
            <div class="rings" aria-hidden="true"><span></span><span></span><span></span></div>
            <div class="device">${R.shot('clear', { eager: true, sizes: '(max-width: 900px) 64vw, 280px' })}</div>
        </div>
    </div>
    <svg class="waterline" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true"><path class="w2" d="M0 50 C 360 10 720 90 1080 50 S 1440 30 1440 40 V90 H0Z"/></svg>
</section>

<section class="download" id="download" aria-labelledby="dl-h">
    <div class="wrap download__grid">
        <div>
            <h2 id="dl-h">${esc(h.download.h2)}</h2>
            <p>${esc(h.download.text)}</p>
            <div class="cta-row">${R.badge('download')}</div>
            <figure class="review">
                <div class="stars" aria-label="5 out of 5 stars">★★★★★</div>
                <blockquote>“${esc(APP.review.text)}”</blockquote>
                <figcaption>— ${esc(APP.review.source)}, July 2025</figcaption>
            </figure>
        </div>
        <dl class="facts">${h.download.facts.map((f) => `<div><dt>${esc(f.k)}</dt><dd>${esc(f.v)}</dd></div>`).join('')}</dl>
    </div>
</section>

<section class="screens" id="screenshots" aria-labelledby="ss-h">
    <div class="wrap">
        <h2 id="ss-h" class="section-h">${esc(h.screenshots.h2)}</h2>
        <p class="section-sub">${esc(h.screenshots.sub)}</p>
    </div>
    <div class="screens__track" tabindex="0" aria-label="App screenshots, scroll horizontally">
        ${shots.map((k) => `<figure class="screens__item">${R.shot(k, { sizes: '(max-width: 700px) 62vw, 260px' })}<figcaption>${esc(SCREENSHOTS[k].caption)}</figcaption></figure>`).join('')}
    </div>
</section>

<section class="how" id="how-it-works" aria-labelledby="how-h">
    <div class="wrap">
        <h2 id="how-h" class="section-h section-h--light">${esc(h.how.h2)}</h2>
        <p class="section-sub section-sub--light">${esc(h.how.sub)}</p>
        <ol class="how__steps">
            ${h.how.steps.map((s, i) => `<li><span class="how__n">${i + 1}</span><h3>${esc(s.name)}</h3><p>${esc(s.text)}</p></li>`).join('')}
        </ol>
        <div class="how__why">
            <div class="wave-viz" aria-hidden="true">${Array.from({ length: 28 }, (_, i) => `<i style="--i:${i}"></i>`).join('')}</div>
            <div><h3>${esc(h.how.whyTitle)}</h3><p>${esc(h.how.why)}</p></div>
        </div>
        <div class="tools">
            ${h.how.tools.map((t) => `<article class="tool"><div class="tool__shot">${R.shot(t.key, { sizes: '120px' })}</div><div><h3>${esc(t.name)}</h3><p>${esc(t.text)}</p></div></article>`).join('')}
        </div>
    </div>
</section>

<section class="guides" id="guides" aria-labelledby="g-h">
    <div class="wrap">
        <h2 id="g-h" class="section-h">${esc(h.guides.h2)}</h2>
        <p class="section-sub">${esc(h.guides.sub)}</p>
        <div class="guide-grid">${guides.map(guideCard).join('')}</div>
    </div>
</section>

<section class="faq" id="faq" aria-labelledby="faq-h">
    <div class="wrap wrap--narrow">
        <h2 id="faq-h" class="section-h">${esc(h.faq.h2)}</h2>
        <div class="faq-list">${faqs.map((f, i) => faqItem(f, i === 0)).join('')}</div>
        <p class="updated">Last updated: <time datetime="${today}">${today}</time></p>
    </div>
</section>

${R.finalCta('home', esc(h.cta.h2))}`;
    const headHtml = R.head({ title: h.title, description: h.description, path: '/', schema, preloadHero: true, alternates: URLS });
    return page({ headHtml, navKey: 'home', body, guides, faqs });
}

// ---------------- Guide ----------------
function renderGuide({ g, guides, faqs, today }) {
    const path = `/guides/${g.slug}/`;
    const crumbs = [{ name: 'Home', path: '/' }, { name: 'Guides', path: '/guides/' }, { name: g.navLabel, path }];
    const related = g.related.map((s) => guides.find((x) => x.slug === s)).filter(Boolean);
    const faqLinks = g.faqLinks.map((s) => faqs.find((x) => x.slug === s)).filter(Boolean);
    const toc = [
        { id: 'steps', label: g.manual.heading },
        { id: 'with-clear-wave', label: g.app.heading },
        ...g.sections.map((s) => ({ id: R.slugify(s.h2), label: s.h2 })),
        { id: 'questions', label: 'Questions' }
    ];
    const allFaqs = g.faqs;
    const schema = [
        R.schemaArticle({ headline: g.h1, description: g.description, path, datePublished: '2026-09-28', dateModified: today, image: R.abs(`/assets/appstore/${SCREENSHOTS[g.shot].file}-780.webp`) }),
        R.schemaHowTo({ name: g.manual.heading, description: g.quick, steps: g.manual.steps }),
        R.schemaFaq(allFaqs),
        R.schemaBreadcrumb(crumbs),
        R.schemaOrg()
    ];
    const body = `
<div class="article-hero">
    <div class="wrap">
        ${R.breadcrumbHtml(crumbs)}
        <p class="eyebrow eyebrow--light">Guide · ${esc(g.keyword)}</p>
        <h1>${esc(g.h1)}</h1>
        <p class="byline">By ${esc(APP.developer)}, developer of Clear Wave · Updated <time datetime="${today}">${today}</time></p>
    </div>
    <svg class="waterline waterline--small" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true"><path class="w1" d="M0 30 C 360 0 720 60 1080 30 S 1440 10 1440 30 V60 H0Z"/></svg>
</div>
<div class="wrap article-layout">
    <article class="article">
        <div class="quick">
            <p class="quick__label">Quick answer</p>
            <p>${g.quick}</p>
        </div>
        ${g.intro}
        <nav class="toc" aria-label="On this page"><p class="toc__h">On this page</p><ol>${toc.map((t) => `<li><a href="#${t.id}">${esc(t.label)}</a></li>`).join('')}</ol></nav>

        <h2 id="steps">${esc(g.manual.heading)}</h2>
        <ol class="steps">${g.manual.steps.map((s) => `<li><strong>${esc(s.name)}.</strong> ${esc(s.text)}</li>`).join('')}</ol>

        ${R.appCard(`guide-${g.slug}`, { shotKey: 'cover' })}

        <h2 id="with-clear-wave">${esc(g.app.heading)}</h2>
        <div class="app-steps">
            <div class="app-steps__shot">${R.shot(g.shot, { sizes: '(max-width: 700px) 55vw, 240px' })}</div>
            <ol class="steps steps--app">${g.app.steps.map((s) => `<li><strong>${esc(s.name)}.</strong> ${esc(s.text)}</li>`).join('')}</ol>
        </div>

        ${g.sections.map((s) => `<h2 id="${R.slugify(s.h2)}">${esc(s.h2)}</h2>\n${s.html}`).join('\n')}

        <h2 id="questions">Questions</h2>
        <div class="faq-list faq-list--compact">
            ${allFaqs.map((f) => `<details class="faq-item"><summary><h3>${esc(f.q)}</h3><span class="faq-plus" aria-hidden="true"></span></summary><div class="faq-a"><p>${f.a}</p></div></details>`).join('')}
        </div>
        ${faqLinks.length ? `<div class="more-links"><p class="more-links__h">More answers</p><ul>${faqLinks.map((f) => `<li><a href="/faq/${f.slug}/">${esc(f.question)}</a></li>`).join('')}</ul></div>` : ''}
        ${g.sources.length ? `<div class="sources"><p class="more-links__h">Sources</p><ul>${g.sources.map((s) => `<li><a href="${s.url}" rel="noopener" target="_blank">${esc(s.name)}</a></li>`).join('')}</ul></div>` : ''}
    </article>
    <aside class="side">
        <div class="side-card">
            ${R.appIcon(72, 'side-card__icon')}
            <p class="side-card__name">Clear Wave</p>
            <p class="side-card__sub">${esc(APP.storeName)}</p>
            <p class="side-card__meta">Free · iPhone &amp; iPad · iOS ${APP.minIOS}+</p>
            ${R.badge(`side-${g.slug}`)}
            <img class="qr" src="${ASSETS.qr}" width="110" height="110" alt="QR code to download Clear Wave" loading="lazy">
        </div>
    </aside>
</div>
<section class="related" aria-labelledby="rel-h">
    <div class="wrap">
        <h2 id="rel-h" class="section-h">Related guides</h2>
        <div class="guide-grid guide-grid--3">${related.map((r) => guideCard(r, guides.indexOf(r))).join('')}</div>
    </div>
</section>
${R.finalCta(`guide-${g.slug}`)}`;
    const headHtml = R.head({ title: g.title, description: g.description, path, ogType: 'article', schema });
    return page({ headHtml, navKey: 'guides', body, guides, faqs });
}

// ---------------- Guides hub ----------------
function renderGuidesHub({ guides, faqs }) {
    const path = '/guides/';
    const crumbs = [{ name: 'Home', path: '/' }, { name: 'Guides', path }];
    const title = 'Speaker Fix Guides: Water Eject, Muffled & Crackling iPhone';
    const description = 'Step-by-step guides to fix an iPhone speaker: get water out, fix muffled or crackling sound, clean dust, test left/right channels and more.';
    const schema = [
        R.schemaBreadcrumb(crumbs),
        { '@context': 'https://schema.org', '@type': 'ItemList', name: 'Clear Wave speaker fix guides', itemListElement: guides.map((g, i) => ({ '@type': 'ListItem', position: i + 1, url: R.abs(`/guides/${g.slug}/`), name: g.h1 })) },
        R.schemaOrg()
    ];
    const body = `
<div class="article-hero">
    <div class="wrap">
        ${R.breadcrumbHtml(crumbs)}
        <h1>Speaker fix guides</h1>
        <p class="hero__sub">Everything you need when your iPhone speaker sounds muffled, quiet or crackly — the honest manual fix first, then the one-tap way with Clear Wave.</p>
    </div>
    <svg class="waterline waterline--small" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true"><path class="w1" d="M0 30 C 360 0 720 60 1080 30 S 1440 10 1440 30 V60 H0Z"/></svg>
</div>
<section class="guides guides--hub"><div class="wrap"><div class="guide-grid">${guides.map(guideCard).join('')}</div></div></section>
${R.finalCta('guides-hub')}`;
    return page({ headHtml: R.head({ title, description, path, schema }), navKey: 'guides', body, guides, faqs });
}

// ---------------- FAQ answer page ----------------
function renderFaq({ f, guides, faqs, today }) {
    const path = `/faq/${f.slug}/`;
    const crumbs = [{ name: 'Home', path: '/' }, { name: 'FAQ', path: '/faq/' }, { name: f.question, path }];
    const guide = guides.find((g) => g.slug === f.guide);
    const others = faqs.filter((x) => x.slug !== f.slug).slice(0, 5);
    const schema = [
        R.schemaFaq([{ q: f.question, a: `${f.short} ${R.strip(f.body)}` }]),
        R.schemaBreadcrumb(crumbs),
        R.schemaOrg()
    ];
    const body = `
<div class="article-hero">
    <div class="wrap">
        ${R.breadcrumbHtml(crumbs)}
        <p class="eyebrow eyebrow--light">Water eject FAQ</p>
        <h1>${esc(f.question)}</h1>
        <p class="byline">By ${esc(APP.developer)}, developer of Clear Wave · Updated <time datetime="${today}">${today}</time></p>
    </div>
    <svg class="waterline waterline--small" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true"><path class="w1" d="M0 30 C 360 0 720 60 1080 30 S 1440 10 1440 30 V60 H0Z"/></svg>
</div>
<div class="wrap article-layout">
    <article class="article">
        <div class="quick"><p class="quick__label">Short answer</p><p>${f.short}</p></div>
        ${f.body}
        ${R.appCard(`faq-${f.slug}`, { title: 'Try it on your iPhone', text: 'Clear Wave runs water eject sessions in one tap and lets you check the result with a stereo test, tone generator and dB meter.', shotKey: 'cover' })}
        ${guide ? `<div class="more-links"><p class="more-links__h">Full guide</p><ul><li><a href="/guides/${guide.slug}/">${esc(guide.h1)}</a></li></ul></div>` : ''}
        <div class="more-links"><p class="more-links__h">Related questions</p><ul>${others.map((o) => `<li><a href="/faq/${o.slug}/">${esc(o.question)}</a></li>`).join('')}</ul></div>
    </article>
    <aside class="side">
        <div class="side-card">
            ${R.appIcon(72, 'side-card__icon')}
            <p class="side-card__name">Clear Wave</p>
            <p class="side-card__sub">${esc(APP.storeName)}</p>
            <p class="side-card__meta">Free · iPhone &amp; iPad · iOS ${APP.minIOS}+</p>
            ${R.badge(`side-faq-${f.slug}`)}
        </div>
    </aside>
</div>
${R.finalCta(`faq-${f.slug}`)}`;
    return page({ headHtml: R.head({ title: f.title, description: f.description, path, ogType: 'article', schema }), navKey: 'faq', body, guides, faqs });
}

// ---------------- FAQ hub ----------------
function renderFaqHub({ guides, faqs, today }) {
    const path = '/faq/';
    const crumbs = [{ name: 'Home', path: '/' }, { name: 'FAQ', path }];
    const title = 'Water Eject FAQ: iPhone Speaker Water & Sound Questions';
    const description = 'Answers about water eject on iPhone: does it work, is it safe, how long water takes to leave, rice, 165 Hz, AirPods, blown speakers and pricing.';
    const schema = [R.schemaFaq(faqs.map((f) => ({ q: f.question, a: f.short }))), R.schemaBreadcrumb(crumbs), R.schemaOrg()];
    const body = `
<div class="article-hero">
    <div class="wrap">
        ${R.breadcrumbHtml(crumbs)}
        <h1>Water eject &amp; speaker FAQ</h1>
        <p class="hero__sub">Short, honest answers — each with a full explanation one click away.</p>
    </div>
    <svg class="waterline waterline--small" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true"><path class="w1" d="M0 30 C 360 0 720 60 1080 30 S 1440 10 1440 30 V60 H0Z"/></svg>
</div>
<section class="faq"><div class="wrap wrap--narrow"><div class="faq-list">${faqs.map((f, i) => faqItem(f, i === 0)).join('')}</div><p class="updated">Last updated: <time datetime="${today}">${today}</time></p></div></section>
${R.finalCta('faq-hub')}`;
    return page({ headHtml: R.head({ title, description, path, schema }), navKey: 'faq', body, guides, faqs });
}

module.exports = { renderHome, renderGuide, renderGuidesHub, renderFaq, renderFaqHub };
