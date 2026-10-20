// Ana sayfa (TR). Ana aramalar: hoparlörden su çıkarma, hoparlör temizleme sesi, iPhone hoparlöründen su nasıl çıkar.
module.exports = {
    title: 'Clear Wave – iPhone Hoparlörden Su Çıkarma Uygulaması',
    description: 'Clear Wave nedir? Hoparlördeki su ve tozu ses dalgalarıyla tek dokunuşta çıkaran ve sesi test eden ücretsiz iPhone ve iPad uygulaması. Hemen indirin.',
    hero: {
        h1Lead: 'Suyu çıkarın',
        h1Rest: 'iPhone hoparlörünüzden',
        sub: 'Ayarlanmış ses dalgaları hoparlörde sıkışan su ve tozu tek dokunuşta dışarı iter. Ardından stereo test, frekans üreteci ve desibel ölçer sesin normale döndüğünü doğrular.',
        bullets: ['Ücretsiz', 'Çevrimdışı çalışır', 'iPhone ve iPad', 'iOS 17.1+']
    },
    // Quick answer under the hero (featured snippet / AI Overview target, see gsc-analysis.md §6.7).
    answer: {
        id: "iphone-su-cikarma-sesi",
        question: "iPhone su çıkarma sesi nasıl kullanılır?",
        h2: "iPhone su çıkarma sesi nasıl kullanılır",
        text: "iPhone hoparlöründen suyu çıkarmak için sesi %70–80’e getirin, hoparlör ızgarasını aşağı çevirin ve 30–60 saniye boyunca yaklaşık 165 Hz’lik pes bir su çıkarma sesi çalın. Titreşen zar suyu ve gevşek tozu ızgaradan dışarı iter. 2–3 kez tekrarlayın. Izgaraya sıkışan toz ve tüy için yumuşak, kuru bir fırça kullanın.",
        steps: [
            "<strong>Ses %70–80</strong>, kılıf çıkarılmış, sessiz mod kapalı.",
            "<strong>Hoparlör aşağı bakacak</strong> şekilde tutun, su aksın.",
            "<strong>30–60 sn 165 Hz ses çalın</strong> — ya da Clear Wave’de tek dokunuş.",
            "<strong>2–3 kez tekrarlayın</strong>, sonra sol ve sağ hoparlörü test edin."
        ],
        more: [
            { href: "guides/iphone-hoparlorden-su-nasil-cikar/", label: "iPhone hoparlöründen su nasıl çıkar" },
            { href: "guides/iphone-hoparlor-temizleme/", label: "Hoparlörden toz nasıl temizlenir" }
        ]
    },
    download: {
        h2: 'iPhone’unuz su altındaymış gibi mi duyuluyor?',
        text: 'Kendi kendine kurumasını saatlerce beklemeyin. Clear Wave’i ücretsiz indirin, hoparlörü aşağı çevirin ve bir kez dokunun.',
        facts: [
            { k: '1 dokunuş', v: 'su çıkarmayı başlatmak için' },
            { k: '4', v: 'hoparlör aracı' },
            { k: '31', v: 'dil, Türkçe dahil' },
            { k: '27 MB', v: 'hafif indirme' }
        ]
    },
    screenshots: {
        h2: 'Clear Wave iş başında',
        sub: 'App Store sayfasından gerçek ekran görüntüleri.'
    },
    how: {
        h2: 'iPhone hoparlöründen su nasıl çıkarılır',
        sub: 'Uygulama açıklamasındaki dört adım: pirinç, saç kurutma makinesi ya da kulak çubuğu yok.',
        steps: [
            { name: 'Rahat bir ses seviyesi seçin', text: 'Yaklaşık %70–80. Zarı hareket ettirmeye yeter; uzun süre en yüksek seviye gerekmez. Kılıfı çıkarın.' },
            { name: 'Hoparlörü aşağı çevirin', text: 'Yer çekiminin suyu dışarı akıtmasına yardım etmesi için iPhone’un alt kenarını yere doğru tutun.' },
            { name: 'Su çıkarmayı başlatın', text: 'Daireye dokunun. Düşük frekanslı ses, zarın damlaları ızgaradan dışarı itmesini sağlar.' },
            { name: 'Test edin, gerekirse tekrarlayın', text: 'Stereo testle sol ve sağı kontrol edin. Çok mu ıslandı? 2–3 oturum yapın ve havada kurumaya bırakın.' }
        ],
        whyTitle: 'Ses neden işe yarar',
        why: 'Hoparlör küçük bir pompadır. Düşük frekanslarda zar uzun hareketler yapar ve havayı — ve suyu — girdiği deliklerden dışarı iter. Apple Watch’taki Su Kilidi de aynı mantıkla çalışır; iPhone’da ise böyle bir özellik yoktur.',
        tools: [
            { key: 'clear', name: 'Su çıkarma ve hoparlör temizleme', text: 'Yağmur, duş, sıçrama veya havuzdan sonra suyu dışarı iten ve tozu gevşeten ses oturumları.' },
            { key: 'test', name: 'Stereo ses testi', text: 'Sol ve sağ kanal ayrı ayrı — boğuk ya da sessiz hoparlörü bulun.' },
            { key: 'tone', name: 'Frekans üreteci', text: 'Kaydırarak istediğiniz frekans. Cızırtı ve boşlukları bulmak için pesten tize gidin.' },
            { key: 'meter', name: 'Desibel ölçer', text: 'Temizlikten önce ve sonra ses seviyesini ölçün, güvenli dinleme seviyelerini takip edin.' }
        ]
    },
    guides: {
        h2: 'Rehberler: hoparlörde su ve kötü ses',
        sub: 'iPhone hoparlörü düzgün çalmadığında insanların aradığı şeylere cevaplar — elle yöntem ve tek dokunuşluk versiyonuyla.'
    },
    faq: { h2: 'Sık sorulan sorular' },
    cta: { h2: 'Bir dakika içinde net ses.' }
};
