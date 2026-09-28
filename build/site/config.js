// Shared facts + per-locale UI strings for the new site (homepage, guides, FAQ).
// Keep app facts in sync with the App Store listing — see /app.md.
const SITE_URL = 'https://clearwaveapp.com/';

const APP = {
    id: '6742754087',
    brand: 'Clear Wave',
    url: 'https://apps.apple.com/app/id6742754087',
    developer: 'Vladimir Ivakhnenko',
    minIOS: '17.1',
    version: '1.4.2',
    size: '27.1 MB',
    rating: '3.9',
    ratingCount: '10',
    review: {
        text: 'My phone had water in it and it got it out thx so much to the ppl who made this app',
        date: '2025-07-20'
    }
};

const ASSETS = {
    icon512: '/assets/appstore/app-icon-512.webp',
    icon256: '/assets/appstore/app-icon-256.webp',
    ogImage: '/site_preview.png',
    badge: '/download.svg',
    qr: '/qr.png'
};

const SHOT_FILES = { cover: 'screenshot-1-cover', clear: 'screenshot-2-clear', test: 'screenshot-3-test', tone: 'screenshot-4-tone', meter: 'screenshot-5-meter' };

const LOCALES = {
    en: {
        lang: 'en',
        base: '/',                       // URL prefix for this locale
        ogLocale: 'en_US',
        fonts: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,800&family=Instrument+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap',
        shotDir: '/assets/appstore/',
        ogImage: '/site_preview.png',
        storeName: 'Speaker Fix – Water Eject',
        siteName: 'Clear Wave – Speaker Fix & Water Eject',
        shots: {
            cover: { caption: 'Speaker fix & liquid remover', alt: 'Clear Wave speaker fix app for iPhone – #1 speaker cleaner and liquid remover' },
            clear: { caption: 'Water eject cleaning session', alt: 'Water eject session in Clear Wave pushing water out of an iPhone speaker with sound waves' },
            test: { caption: 'Stereo test: left & right', alt: 'Stereo speaker test in Clear Wave checking the left and right iPhone speaker channels' },
            tone: { caption: 'Frequency tone generator', alt: 'Clear Wave tone generator playing a 1028 Hz test tone – swipe to change frequency' },
            meter: { caption: 'dB sound meter', alt: 'Clear Wave decibel meter showing 52.2 dB, normal conversation level' }
        },
        t: {
            skip: 'Skip to content', homeAria: 'Clear Wave home', navHow: 'How it works', navGuides: 'Guides', navFaq: 'FAQ', getApp: 'Get the app', mainNav: 'Main',
            badgeAlt: 'Download on the App Store', storeAria: 'Download Clear Wave – Speaker Fix – Water Eject on the App Store',
            iconAlt: 'Clear Wave speaker fix and water eject app icon',
            stickySub: 'Water eject · Free download', stickyGet: 'Get',
            footerAbout: 'Clear Wave (<em>Speaker Fix – Water Eject</em> on the App Store) is an iPhone and iPad app that ejects water and dust from speakers with tuned sound waves, then lets you test the result with a stereo test, tone generator and dB meter.',
            footerGuides: 'Guides', footerQuestions: 'Questions', footerApp: 'App', footerDownload: 'Download on the App Store', privacy: 'Privacy Policy', terms: 'Terms of Use', languages: 'Languages',
            legal: 'Not affiliated with Apple Inc. iPhone and iPad are trademarks of Apple Inc.',
            appCardAria: 'Get the Clear Wave app', appCardEyebrow: 'iPhone &amp; iPad app',
            appCardTitle: 'Do it in one tap with Clear Wave', appCardText: 'Tuned sound waves push water and dust out of your iPhone speaker. Then check the result with the stereo test and dB meter.',
            appCardMeta: 'Free download · iOS 17.1+ · 27.1 MB',
            ctaHeading: 'Muffled speaker? Get your sound back in the next minute.',
            ctaText: 'Download Clear Wave, point the speaker down and run a water eject session. It\'s free to download on iPhone and iPad.',
            qrAlt: 'QR code to download Clear Wave on the App Store', qrScan: 'Scan with your<br>iPhone camera',
            appIdMeta: 'by Clear Wave · Free on the App Store',
            screensAria: 'App screenshots, scroll horizontally',
            crumbHome: 'Home', crumbGuides: 'Guides', crumbFaq: 'FAQ', crumbAria: 'Breadcrumb',
            guideEyebrow: 'Guide', byline: (d) => `By Vladimir Ivakhnenko, developer of Clear Wave · Updated <time datetime="${d}">${d}</time>`,
            quick: 'Quick answer', short: 'Short answer', toc: 'On this page', tocCount: (n) => `${n} sections`,
            questions: 'Questions', moreAnswers: 'More answers', sources: 'Sources', related: 'Related guides', readGuide: 'Read guide',
            fullGuide: 'Full guide', relatedQuestions: 'Related questions', faqEyebrow: 'Water eject FAQ',
            tryTitle: 'Try it on your iPhone', tryText: 'Clear Wave runs water eject sessions in one tap and lets you check the result with a stereo test, tone generator and dB meter.',
            learnMore: 'Learn more', learnMoreAbout: 'about', updated: 'Last updated',
            sideMeta: 'Free · iPhone &amp; iPad · iOS 17.1+',
            reviewSource: 'App Store review, July 2025', starsAria: '5 out of 5 stars',
            ogAlt: 'Clear Wave – speaker fix and water eject app for iPhone',
            schemaAppDesc: 'iPhone and iPad app that ejects water and dust from speakers with tuned sound waves and includes a stereo test, tone generator and decibel meter.',
            schemaSub: 'Speaker cleaner / water eject', howToTool: 'Clear Wave app (iPhone / iPad)',
            guidesHub: { title: 'Speaker Fix Guides: Water Eject, Muffled & Crackling iPhone', description: 'Step-by-step guides to fix an iPhone speaker: get water out, fix muffled or crackling sound, clean dust, test left/right channels and more.', h1: 'Speaker fix guides', sub: 'Everything you need when your iPhone speaker sounds muffled, quiet or crackly — the honest manual fix first, then the one-tap way with Clear Wave.', listName: 'Clear Wave speaker fix guides' },
            faqHub: { title: 'Water Eject FAQ: iPhone Speaker Water & Sound Questions', description: 'Answers about water eject on iPhone: does it work, is it safe, how long water takes to leave, rice, 165 Hz, AirPods, blown speakers and pricing.', h1: 'Water eject &amp; speaker FAQ', sub: 'Short, honest answers — each with a full explanation one click away.' }
        }
    },
    ru: {
        lang: 'ru',
        base: '/ru/',
        ogLocale: 'ru_RU',
        // Bricolage / Instrument Sans have no Cyrillic — Russian pages use Manrope + Golos Text
        fonts: 'https://fonts.googleapis.com/css2?family=Manrope:wght@600;800&family=Golos+Text:wght@400;500;600&display=swap',
        shotDir: '/assets/appstore/ru/',
        ogImage: '/ru/site_preview.png',
        storeName: 'Удалить воду из динамика',
        siteName: 'Clear Wave – удалить воду из динамика iPhone',
        shots: {
            cover: { caption: 'Чистка динамика', alt: 'Clear Wave — приложение для чистки динамика iPhone и удаления воды' },
            clear: { caption: 'Убрать воду из динамика', alt: 'Сессия удаления воды в Clear Wave: звуковые волны выталкивают воду из динамика iPhone' },
            test: { caption: 'Проверка стереозвучания', alt: 'Тест левого и правого динамика iPhone в Clear Wave' },
            tone: { caption: 'Генератор тона', alt: 'Генератор частот Clear Wave: тестовый тон 1028 Гц, свайп меняет частоту' },
            meter: { caption: 'Шумомер (децибелометр)', alt: 'Шумомер Clear Wave показывает 52,2 дБ — уровень обычного разговора' }
        },
        t: {
            skip: 'Перейти к содержанию', homeAria: 'Clear Wave — главная', navHow: 'Как это работает', navGuides: 'Инструкции', navFaq: 'Вопросы', getApp: 'Скачать', mainNav: 'Основное меню',
            badgeAlt: 'Загрузите в App Store', storeAria: 'Скачать «Удалить воду из динамика» (Clear Wave) в App Store',
            iconAlt: 'Иконка приложения Clear Wave — удалить воду из динамика',
            stickySub: 'Удалить воду · Бесплатно', stickyGet: 'Скачать',
            footerAbout: 'Clear Wave (в App Store — <em>«Удалить воду из динамика»</em>) — приложение для iPhone и iPad, которое выталкивает воду и пыль из динамика звуковыми волнами и помогает проверить результат: стереотест, генератор тона и шумомер.',
            footerGuides: 'Инструкции', footerQuestions: 'Вопросы', footerApp: 'Приложение', footerDownload: 'Скачать в App Store', privacy: 'Политика конфиденциальности', terms: 'Условия использования', languages: 'Языки',
            legal: 'Не связано с Apple Inc. iPhone и iPad — товарные знаки Apple Inc.',
            appCardAria: 'Скачать приложение Clear Wave', appCardEyebrow: 'Для iPhone и iPad',
            appCardTitle: 'Сделайте это в одно касание с Clear Wave', appCardText: 'Подобранные звуковые волны выталкивают воду и пыль из динамика iPhone. Затем проверьте результат стереотестом и шумомером.',
            appCardMeta: 'Бесплатно · iOS 17.1+ · 27,1 МБ',
            ctaHeading: 'Глухой звук? Верните чистый звук за минуту.',
            ctaText: 'Скачайте Clear Wave, поверните телефон динамиком вниз и запустите удаление воды. Приложение бесплатно для iPhone и iPad.',
            qrAlt: 'QR-код для скачивания Clear Wave в App Store', qrScan: 'Наведите камеру<br>iPhone',
            appIdMeta: 'Clear Wave · Бесплатно в App Store',
            screensAria: 'Скриншоты приложения, прокрутите по горизонтали',
            crumbHome: 'Главная', crumbGuides: 'Инструкции', crumbFaq: 'Вопросы', crumbAria: 'Навигационная цепочка',
            guideEyebrow: 'Инструкция', byline: (d) => `Автор: Владимир Ивахненко, разработчик Clear Wave · Обновлено <time datetime="${d}">${d.split('-').reverse().join('.')}</time>`,
            quick: 'Коротко', short: 'Короткий ответ', toc: 'Содержание', tocCount: (n) => `${n} ${n % 10 === 1 && n % 100 !== 11 ? 'раздел' : (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 'раздела' : 'разделов')}`,
            questions: 'Вопросы', moreAnswers: 'Ещё ответы', sources: 'Источники', related: 'Похожие инструкции', readGuide: 'Читать',
            fullGuide: 'Подробная инструкция', relatedQuestions: 'Похожие вопросы', faqEyebrow: 'Вопросы об удалении воды',
            tryTitle: 'Попробуйте на своём iPhone', tryText: 'Clear Wave запускает удаление воды в одно касание, а стереотест, генератор тона и шумомер помогают проверить результат.',
            learnMore: 'Подробнее', learnMoreAbout: '—', updated: 'Обновлено',
            sideMeta: 'Бесплатно · iPhone и iPad · iOS 17.1+',
            reviewSource: 'Отзыв в App Store, июль 2025', starsAria: '5 из 5 звёзд',
            ogAlt: 'Clear Wave — удалить воду из динамика iPhone',
            schemaAppDesc: 'Приложение для iPhone и iPad: удаляет воду и пыль из динамика звуковыми волнами, включает стереотест, генератор тона и шумомер.',
            schemaSub: 'Очистка динамика / удаление воды', howToTool: 'Приложение Clear Wave (iPhone / iPad)',
            guidesHub: { title: 'Инструкции: вода в динамике, глухой и хрипящий звук iPhone', description: 'Пошаговые инструкции: как убрать воду из динамика iPhone, исправить глухой или хрипящий звук, почистить сетку и проверить левый и правый динамик.', h1: 'Инструкции по ремонту звука', sub: 'Всё, что нужно, когда динамик iPhone звучит глухо, тихо или хрипит: сначала честный ручной способ, затем — в одно касание с Clear Wave.', listName: 'Инструкции Clear Wave' },
            faqHub: { title: 'Вопросы: вода в динамике iPhone и удаление воды звуком', description: 'Ответы про удаление воды из динамика iPhone: работает ли, безопасно ли, сколько сохнет, рис, 165 Гц, AirPods, сгоревший динамик и цена.', h1: 'Вопросы об удалении воды', sub: 'Короткие честные ответы — подробное объяснение в один клик.' }
        }
    }
};

module.exports = { SITE_URL, APP, ASSETS, SHOT_FILES, LOCALES };
