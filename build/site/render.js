// Tiny HTML helpers + shared layout for the English site.
const { SITE_URL, APP, ASSETS, SCREENSHOTS } = require('./config');
const { URLS } = require('../constants');

const esc = (s = '') => String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const strip = (s = '') => String(s).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
const abs = (p) => SITE_URL + String(p).replace(/^\//, '');
const jsonLd = (obj) => `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`;
const slugify = (s) => strip(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function storeLink(location, inner, cls = 'store-badge') {
    return `<a class="${cls}" href="${APP.url}" rel="nofollow noopener" data-cta="${esc(location)}" aria-label="Download ${esc(APP.brand)} – ${esc(APP.storeName)} on the App Store">${inner}</a>`;
}
function badge(location, extra = '') {
    return storeLink(location, `<img src="${ASSETS.badge}" alt="Download on the App Store" width="180" height="60">`, `store-badge ${extra}`.trim());
}

function shot(key, { eager = false, sizes = '(max-width: 700px) 60vw, 260px', cls = '' } = {}) {
    const s = SCREENSHOTS[key];
    const base = `/assets/appstore/${s.file}`;
    return `<img class="shot ${cls}" src="${base}-390.webp" srcset="${base}-390.webp 390w, ${base}-780.webp 780w" sizes="${sizes}" width="390" height="844" alt="${esc(s.alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;
}

function appIcon(size = 64, cls = 'app-icon', eager = false) {
    return `<img class="${cls}" src="${size > 180 ? ASSETS.icon512 : ASSETS.icon256}" width="${size}" height="${size}" alt="Clear Wave speaker fix and water eject app icon" ${eager ? '' : 'loading="lazy"'} decoding="async">`;
}

function head({ title, description, path, ogType = 'website', schema = [], preloadHero = false, alternates = null }) {
    const url = abs(path);
    const alt = alternates
        ? alternates.map(({ lang, url: u }) => `<link rel="alternate" hreflang="${lang}" href="${u}">`).join('\n    ') + `\n    <link rel="alternate" hreflang="x-default" href="${SITE_URL}">`
        : '';
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
    <meta name="author" content="${esc(APP.developer)}">
    <link rel="canonical" href="${url}">
    ${alt}
    <meta property="og:type" content="${ogType}">
    <meta property="og:url" content="${url}">
    <meta property="og:title" content="${esc(title)}">
    <meta property="og:description" content="${esc(description)}">
    <meta property="og:image" content="${abs(ASSETS.ogImage)}">
    <meta property="og:image:width" content="${ASSETS.ogImageWidth}">
    <meta property="og:image:height" content="${ASSETS.ogImageHeight}">
    <meta property="og:image:alt" content="Clear Wave – speaker fix and water eject app for iPhone">
    <meta property="og:site_name" content="${esc(APP.siteName)}">
    <meta property="og:locale" content="en_US">
    <meta property="og:logo" content="${abs(ASSETS.icon512)}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="${url}">
    <meta name="twitter:title" content="${esc(title)}">
    <meta name="twitter:description" content="${esc(description)}">
    <meta name="twitter:image" content="${abs(ASSETS.ogImage)}">
    <meta name="twitter:image:width" content="${ASSETS.ogImageWidth}">
    <meta name="twitter:image:height" content="${ASSETS.ogImageHeight}">
    <meta name="apple-itunes-app" content="app-id=${APP.id}">
    <meta name="apple-mobile-web-app-title" content="Clear Wave">
    <meta name="theme-color" content="#1a0b45">
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,800&family=Instrument+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap">
    ${preloadHero ? `<link rel="preload" as="image" href="/assets/appstore/screenshot-2-clear-390.webp" imagesrcset="/assets/appstore/screenshot-2-clear-390.webp 390w, /assets/appstore/screenshot-2-clear-780.webp 780w" imagesizes="(max-width: 700px) 60vw, 300px" fetchpriority="high">` : ''}
    <link rel="stylesheet" href="/assets/site.css?v={{VERSION}}">
    ${schema.map(jsonLd).join('\n    ')}
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-G4CQ97HTGF"></script>
    <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-G4CQ97HTGF');</script>
</head>`;
}

function nav(current = '') {
    const link = (href, label, key) => `<a href="${href}"${current === key ? ' aria-current="page"' : ''}>${label}</a>`;
    return `
<a class="skip" href="#main">Skip to content</a>
<header class="site-header">
    <div class="wrap nav">
        <a class="brand" href="/" aria-label="Clear Wave home">
            <img src="${ASSETS.icon256}" width="36" height="36" alt="" decoding="async">
            <span>Clear Wave</span>
        </a>
        <nav class="nav-links" aria-label="Main">
            ${link('/#how-it-works', 'How it works', 'how')}
            ${link('/guides/', 'Guides', 'guides')}
            ${link('/faq/', 'FAQ', 'faq')}
        </nav>
        ${storeLink('nav', 'Get the app', 'btn btn-small')}
    </div>
</header>`;
}

function stickyBar() {
    return `
<div class="sticky-cta" data-sticky hidden>
    <img src="${ASSETS.icon256}" width="40" height="40" alt="" decoding="async">
    <div><strong>Clear Wave</strong><span>Water eject · Free download</span></div>
    ${storeLink('sticky', 'Get', 'btn btn-small')}
</div>`;
}

function footer(guides, faqs) {
    const langs = URLS.filter((u) => u.lang !== 'en')
        .map((u) => `<a href="/${u.lang}/" hreflang="${u.lang}">${u.lang.toUpperCase()}</a>`).join(' ');
    return `
<footer class="site-footer">
    <div class="wave-edge wave-edge--top" aria-hidden="true"></div>
    <div class="wrap footer-grid">
        <div class="footer-brand">
            <a class="brand" href="/"><img src="${ASSETS.icon256}" width="44" height="44" alt="" loading="lazy"><span>Clear Wave</span></a>
            <p>Clear Wave (<em>${esc(APP.storeName)}</em> on the App Store) is an iPhone and iPad app that ejects water and dust from speakers with tuned sound waves, then lets you test the result with a stereo test, tone generator and dB meter.</p>
            ${badge('footer')}
        </div>
        <div>
            <h2 class="footer-h">Guides</h2>
            <ul>${guides.map((g) => `<li><a href="/guides/${g.slug}/">${esc(g.navLabel || g.h1)}</a></li>`).join('')}</ul>
        </div>
        <div>
            <h2 class="footer-h">Questions</h2>
            <ul>${faqs.map((f) => `<li><a href="/faq/${f.slug}/">${esc(f.question)}</a></li>`).join('')}</ul>
        </div>
        <div>
            <h2 class="footer-h">App</h2>
            <ul>
                <li><a href="${APP.url}" rel="nofollow noopener">Download on the App Store</a></li>
                <li><a href="/privacy.html">Privacy Policy</a></li>
                <li><a href="/terms.html">Terms of Use</a></li>
                <li><a href="/llms.txt">llms.txt</a></li>
            </ul>
            <h2 class="footer-h">Languages</h2>
            <p class="langs"><a href="/" hreflang="en">EN</a> ${langs}</p>
        </div>
    </div>
    <div class="wrap footer-base">
        <span>© ${new Date().getFullYear()} c-basso · ${esc(APP.developer)}. Not affiliated with Apple Inc. iPhone and iPad are trademarks of Apple Inc.</span>
    </div>
</footer>`;
}

function scripts() {
    return `
<script src="/assets/site.js?v={{VERSION}}" defer></script>
<script>
(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");
ym(103203417,"init",{clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true});
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/103203417" style="position:absolute;left:-9999px" alt=""></div></noscript>`;
}

// ---------- Schema builders ----------
function schemaApp() {
    return {
        '@context': 'https://schema.org',
        '@type': 'MobileApplication',
        name: `${APP.brand} – ${APP.storeName}`,
        alternateName: [APP.storeName, APP.brand],
        description: 'iPhone and iPad app that ejects water and dust from speakers with tuned sound waves and includes a stereo test, tone generator and decibel meter.',
        url: SITE_URL,
        applicationCategory: 'MusicApplication',
        applicationSubCategory: 'Speaker cleaner / water eject',
        operatingSystem: `iOS ${APP.minIOS} or later`,
        softwareVersion: APP.version,
        fileSize: APP.size,
        downloadUrl: APP.url,
        installUrl: APP.url,
        image: abs(ASSETS.icon512),
        screenshot: Object.values(SCREENSHOTS).map((s) => abs(`/assets/appstore/${s.file}-780.webp`)),
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
        aggregateRating: { '@type': 'AggregateRating', ratingValue: APP.rating, ratingCount: APP.ratingCount, bestRating: '5', worstRating: '1' },
        author: { '@type': 'Person', name: APP.developer },
        publisher: { '@id': `${SITE_URL}#org` }
    };
}
function schemaOrg() {
    return {
        '@context': 'https://schema.org', '@type': 'Organization', '@id': `${SITE_URL}#org`,
        name: 'Clear Wave', url: SITE_URL, logo: abs(ASSETS.icon512),
        founder: { '@type': 'Person', name: APP.developer },
        foundingDate: '2025', sameAs: [APP.url]
    };
}
function schemaWebsite() {
    return { '@context': 'https://schema.org', '@type': 'WebSite', '@id': `${SITE_URL}#website`, name: APP.siteName, url: SITE_URL, inLanguage: 'en', publisher: { '@id': `${SITE_URL}#org` } };
}
function schemaBreadcrumb(items) {
    return {
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: abs(it.path) }))
    };
}
function schemaFaq(list) {
    return {
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: list.map((f) => ({ '@type': 'Question', name: strip(f.q), acceptedAnswer: { '@type': 'Answer', text: strip(f.a) } }))
    };
}
function schemaHowTo({ name, description, steps, totalTime = 'PT2M', image }) {
    return {
        '@context': 'https://schema.org', '@type': 'HowTo', name, description: strip(description), totalTime,
        ...(image ? { image } : {}),
        tool: [{ '@type': 'HowToTool', name: 'Clear Wave app (iPhone / iPad)' }],
        step: steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: strip(s.name), text: strip(s.text) }))
    };
}
function schemaArticle({ headline, description, path, datePublished, dateModified, image }) {
    return {
        '@context': 'https://schema.org', '@type': 'Article', headline, description,
        mainEntityOfPage: abs(path), image: image || abs(ASSETS.ogImage), inLanguage: 'en',
        datePublished, dateModified,
        author: { '@type': 'Person', name: APP.developer },
        publisher: { '@id': `${SITE_URL}#org` },
        about: { '@type': 'MobileApplication', name: `${APP.brand} – ${APP.storeName}`, url: APP.url }
    };
}

function breadcrumbHtml(items) {
    return `<nav class="crumbs" aria-label="Breadcrumb"><ol>${items.map((it, i) => i === items.length - 1
        ? `<li aria-current="page">${esc(it.name)}</li>`
        : `<li><a href="${it.path}">${esc(it.name)}</a></li>`).join('')}</ol></nav>`;
}

// App promo card used inside guides / FAQ pages
function appCard(location, { title = 'Do it in one tap with Clear Wave', text = 'Tuned sound waves push water and dust out of your iPhone speaker. Then check the result with the stereo test and dB meter.', shotKey = 'clear' } = {}) {
    return `
<aside class="app-card" aria-label="Get the Clear Wave app">
    <div class="app-card__shot">${shot(shotKey, { sizes: '160px' })}</div>
    <div class="app-card__body">
        <p class="eyebrow">iPhone &amp; iPad app</p>
        <h2 class="app-card__title">${title}</h2>
        <p>${text}</p>
        <div class="app-card__row">
            ${badge(location)}
            <span class="app-card__meta">Free download · iOS ${APP.minIOS}+ · ${APP.size}</span>
        </div>
    </div>
</aside>`;
}

function finalCta(location, heading = 'Muffled speaker? Get your sound back in the next minute.') {
    return `
<section class="final-cta" aria-labelledby="cta-${location}">
    <div class="rings" aria-hidden="true"><span></span><span></span><span></span></div>
    <div class="wrap final-cta__inner">
        ${appIcon(96, 'final-cta__icon')}
        <h2 id="cta-${location}">${heading}</h2>
        <p>Download Clear Wave, point the speaker down and run a water eject session. It's free to download on iPhone and iPad.</p>
        <div class="cta-row">
            ${badge(location)}
            <img class="qr" src="${ASSETS.qr}" width="96" height="96" alt="QR code to download Clear Wave on the App Store" loading="lazy">
        </div>
    </div>
</section>`;
}

module.exports = {
    esc, strip, abs, slugify, head, nav, footer, scripts, stickyBar, badge, storeLink, shot, appIcon,
    appCard, finalCta, breadcrumbHtml,
    schemaApp, schemaOrg, schemaWebsite, schemaBreadcrumb, schemaFaq, schemaHowTo, schemaArticle
};
