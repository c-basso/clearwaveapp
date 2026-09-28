// Shared facts for the English site (homepage, guides, FAQ pages).
// Keep these in sync with the App Store listing — see /app.md.
const SITE_URL = 'https://clearwaveapp.com/';

const APP = {
    id: '6742754087',
    storeName: 'Speaker Fix – Water Eject',
    brand: 'Clear Wave',
    siteName: 'Clear Wave – Speaker Fix & Water Eject',
    subtitle: 'Dried Fast, Sounds Right',
    url: 'https://apps.apple.com/app/id6742754087',
    developer: 'Vladimir Ivakhnenko',
    minIOS: '17.1',
    version: '1.4.2',
    size: '27.1 MB',
    rating: '3.9',
    ratingCount: '10',
    category: 'Music',
    languages: '31',
    review: {
        title: 'Clear wave is a 5/5',
        text: 'My phone had water in it and it got it out thx so much to the ppl who made this app',
        date: '2025-07-20',
        source: 'App Store review'
    }
};

const ASSETS = {
    icon512: '/assets/appstore/app-icon-512.webp',
    icon256: '/assets/appstore/app-icon-256.webp',
    icon180: '/assets/appstore/app-icon-180.webp',
    iconPng: '/assets/appstore/app-icon-180.png',
    ogImage: '/site_preview.png',
    ogImageWidth: '1026',
    ogImageHeight: '539',
    badge: '/download.svg',
    qr: '/qr.png'
};

// Screenshot metadata (files live in /assets/appstore/, each has -390.webp and -780.webp)
const SCREENSHOTS = {
    cover: { file: 'screenshot-1-cover', caption: 'Speaker fix & liquid remover', alt: 'Clear Wave speaker fix app for iPhone – #1 speaker cleaner and liquid remover' },
    clear: { file: 'screenshot-2-clear', caption: 'Water eject cleaning session', alt: 'Water eject session in Clear Wave pushing water out of an iPhone speaker with sound waves' },
    test: { file: 'screenshot-3-test', caption: 'Stereo test: left & right', alt: 'Stereo speaker test in Clear Wave checking the left and right iPhone speaker channels' },
    tone: { file: 'screenshot-4-tone', caption: 'Frequency tone generator', alt: 'Clear Wave tone generator playing a 1028 Hz test tone – swipe to change frequency' },
    meter: { file: 'screenshot-5-meter', caption: 'dB sound meter', alt: 'Clear Wave decibel meter showing 52.2 dB, normal conversation level' }
};

module.exports = { SITE_URL, APP, ASSETS, SCREENSHOTS };
