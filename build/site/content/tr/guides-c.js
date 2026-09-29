// Rehberler 11–14.
module.exports = [
{
    id: 'iphone-dropped-in-water',
    slug: 'telefon-suya-dustu-ne-yapmali',
    navLabel: 'Telefon suya düştü: ne yapmalı',
    keyword: 'telefon suya düştü ne yapmalı',
    title: 'Telefon Suya Düştü: İlk 30 Dakikada Ne Yapmalı',
    description: 'iPhone suya, havuza veya klozete mi düştü? Hemen yapılacaklar: Apple’ın önerdiği kurutma, sıvı uyarısı, hoparlörden su çıkarma ve ne zaman şarj etmeli.',
    h1: 'Telefon suya mı düştü? İlk 30 dakikada yapmanız gerekenler',
    shot: 'clear',
    quick: 'Sudan çıkarın, kurulayın ve <strong>şarj etmeyin</strong>. Bağlantı noktası aşağı bakacak şekilde avucunuza hafifçe vurun, kuru ve havadar bir yere bırakın ve şarj etmek için en az 30 dakika bekleyin (sıvı uyarısı çıkarsa 24 saate kadar). Boğuk ses için hoparlör aşağıdayken su çıkarma sesi çalın. <strong>Pirinç ve saç kurutma makinesi yok.</strong>',
    intro: '<p>Güncel iPhone’lar suya dayanıklıdır (modele göre IP67 veya IP68), bu yüzden kısa bir dalış genellikle atlatılır. Ancak dayanıklı olmak su geçirmez olmak demek değildir; bu koruma zamanla azalır ve sıvı hasarı Apple’ın standart garantisi kapsamında değildir. Önümüzdeki yarım saatte yaptıklarınız fark yaratır.</p>',
    manual: {
        heading: 'Şimdi yapmanız gerekenler',
        steps: [
            { name: 'Sudan çıkarın, garip davranıyorsa kapatın', text: 'Ekran titriyorsa veya cihaz tuhaf davranıyorsa kapatın.' },
            { name: 'Kılıfı çıkarın', text: 'Her şeyi tüy bırakmayan yumuşak bir bezle kurulayın.' },
            { name: 'Tatlı su değilse durulayın', text: 'Apple’ın sıçramaya dayanıklı iPhone’lar için önerisi: sudan başka bir sıvıyla (deniz suyu, gazlı içecek, klorlu havuz suyu) temas ettiyse o bölgeyi musluk suyuyla durulayın, ardından silip kurulayın.' },
            { name: 'Bağlantı noktasındaki suyu çıkarın', text: 'Şarj girişi aşağı bakacak şekilde avucunuza hafifçe vurun.' },
            { name: 'Hoparlörleri sesle boşaltın', text: 'Hoparlör aşağıda, ses %70–80, 30–60 saniye su çıkarma sesi; 2–3 kez.' },
            { name: 'Şarjdan önce kurutun', text: 'Biraz hava alan kuru bir yere bırakın. En az 30 dakika bekleyin; sıvı uyarısı çıkarsa o kaybolana kadar (24 saate kadar).' }
        ]
    },
    app: {
        heading: 'Clear Wave ile sesi geri getirin',
        steps: [
            { name: 'Su çıkarmayı başlatın', text: 'Önce alttaki hoparlör aşağı bakacak şekilde.' },
            { name: 'Ahize hoparlörü için çevirin', text: 'İkinci seansı üst kısım aşağı bakacak şekilde yapın.' },
            { name: 'İki kanalı kontrol edin', text: 'Stereo test, sol ve sağın eşit derecede temiz çaldığını doğrular.' },
            { name: 'Kuruduktan sonra tekrarlayın', text: 'Bir saat sonra bir seans daha yapın — su ızgaraya geri gelebilir.' }
        ]
    },
    sections: [
        { h2: '«Lightning / USB-C konnektöründe sıvı algılandı»', html: '<p>iPhone XS, iPhone XR ve sonraki modeller şarj girişinde sıvı olduğunda uyarır. Bu uyarı çıkarsa kabloyu çıkarın, hafifçe vurarak suyu boşaltın ve kurumaya bırakın. Acil durumda şarj seçeneğini yalnızca gerçekten gerekirse kullanın. Apple’a göre giriş kururken kablosuz şarj cihazı kullanmaya devam edebilirsiniz.</p>' },
        { h2: 'Yapılmaması gerekenler', html: '<ul class="check-list check-list--no"><li><strong>Pirinç</strong>: Apple önermiyor; pirinç tozu ve taneleri iPhone’un içine girebilir.</li><li><strong>Saç kurutma makinesi, fırın, kalorifer</strong>: ısı bataryaya ve contalara zarar verir.</li><li><strong>Girişe kulak çubuğu veya kâğıt sokmak</strong>.</li><li><strong>Islakken şarj etmek</strong>.</li></ul>' }
    ],
    faqs: [
        { q: 'Islak iPhone’u şarj etmek için ne kadar beklemeliyim?', a: 'Apple en az 30 dakika, sıvı uyarısı görünmeye devam ederse 24 saate kadar beklemeyi önerir.' },
        { q: 'iPhone’um su geçirmez mi?', a: 'Hiçbir iPhone su geçirmez değildir. iPhone 7 ve sonrası suya dayanıklıdır (IP67 veya IP68). Dayanıklılık zamanla ve kullanımla azalır.' },
        { q: 'iPhone’um klozete düştü, ne yapmalıyım?', a: 'Çıkarın, dış yüzeyini temiz musluk suyuyla kısaca durulayın, kurulayın, hoparlör için birkaç su çıkarma döngüsü yapın ve şarj etmeden önce kurumasını bekleyin.' }
    ],
    related: ['get-water-out-of-iphone-speaker', 'iphone-speaker-muffled', 'water-eject-app-iphone'],
    faqLinks: ['should-i-put-wet-iphone-in-rice', 'how-long-for-water-to-leave-iphone-speaker', 'is-water-eject-safe']
},
{
    id: 'left-right-speaker-test',
    slug: 'sol-sag-hoparlor-testi',
    navLabel: 'Sol sağ hoparlör testi',
    keyword: 'sol sağ ses testi',
    title: 'Sol Sağ Ses Testi: iPhone ve Kulaklık Hoparlör Testi',
    description: 'iPhone, AirPods veya kulaklıkta saniyeler içinde sol sağ ses testi yapın. Kısık, boğuk ya da sessiz kanalı bulun ve ne yapacağınızı öğrenin.',
    h1: 'Sol sağ ses testi: iki kanalı saniyeler içinde kontrol edin',
    shot: 'test',
    quick: 'Sol/sağ (stereo) test, sesi <strong>her seferinde tek bir kanaldan</strong> çalar; böylece bir hoparlörün kısık, boğuk veya sessiz olup olmadığını duyarsınız. iPhone’da ahize hoparlörü ve alttaki hoparlör iki kanaldır. Islandıktan sonra bir taraf daha kötü çalıyorsa o hoparlör için su çıkarma yapın ve tekrar test edin.',
    intro: '<p>İki hoparlör birlikte çalarken bir taraftaki sorunu kaçırmak kolaydır. Kanalları ayırmak sorunu belirgin hâle getirir ve tam olarak hangi hoparlörü temizlemeniz, kurutmanız veya onartmanız gerektiğini gösterir. Kulaklıklar, AirPods ve Bluetooth hoparlörlerle de çalışır.</p>',
    manual: {
        heading: 'Sol sağ ses testi nasıl yapılır',
        steps: [
            { name: 'Mono Ses’i kapatın', text: 'Ayarlar → Erişilebilirlik → Ses ve Görsel → «Mono Ses» kapalı olmalı; yoksa iki kanal da aynı sesi çalar.' },
            { name: 'Dengeyi kontrol edin', text: 'Aynı menüde denge kaydırıcısı S ile R arasında ortada olmalı.' },
            { name: 'Yalnızca sol kanalı çalın', text: 'Hangi hoparlör çalıyor ve ses temiz mi?' },
            { name: 'Yalnızca sağ kanalı çalın', text: 'Ses seviyesini ve netliği sol ile karşılaştırın.' },
            { name: 'Zayıf tarafı çözün', text: 'Boğuk = su veya toz (temizleyin). Sessiz veya cızırtılı = olası arıza.' }
        ]
    },
    app: {
        heading: 'Clear Wave’de stereo test',
        steps: [
            { name: 'Stereo testi açın', text: 'Sol kanal ve sağ kanal için birer düğme göreceksiniz.' },
            { name: 'Solda On’a dokunun', text: 'Ses yalnızca bir taraftan gelmeli.' },
            { name: 'Sağda On’a dokunun', text: 'Sol ile karşılaştırın.' },
            { name: 'Zayıf tarafı temizleyin', text: 'O hoparlör aşağı bakarken su çıkarma yapın ve tekrar test edin.' }
        ]
    },
    sections: [
        { h2: 'iPhone’un hangi hoparlörü sol, hangisi sağ?', html: '<p>Dikey tutulduğunda iOS stereoyu <strong>alttaki hoparlör</strong> ile <strong>ahize hoparlörü</strong> arasında böler. Yatay tutulduğunda iOS kanalları, sol ve sağ iPhone’u tutuşunuza uyacak şekilde değiştirir. Testi genellikle video izlediğiniz konumda yapın.</p>' },
        { h2: 'AirPods ve kulaklık testi', html: '<p>Kulaklığı bağlayıp aynı testi yapın. Bir AirPod daha kısıksa, filtresini yumuşak ve kuru bir fırçayla nazikçe temizleyin ve Erişilebilirlik’teki dengeyi kontrol edin. Kapalı kulaklıklardaki nemin kuruması zaman alabilir — bkz. <a href="/tr/faq/airpodstan-su-cikarma/">sesle su çıkarma AirPods’ta işe yarar mı?</a></p>' }
    ],
    faqs: [
        { q: 'iPhone’um neden tek hoparlörden çalıyor?', a: 'Mono Ses’in kapalı ve dengenin ortada olduğunu kontrol edin. Sonra stereo test yapın; bir taraf boğuksa su veya toz olabilir.' },
        { q: 'Sol ve sağ AirPod ayrı test edilebilir mi?', a: 'Evet. Bağlayıp stereo test çalıştırın — her kulaklık yalnızca kendi kanalını çalmalı.' },
        { q: 'Ahize hoparlörü neden alttakinden daha kısık?', a: 'Daha küçüktür ve aramalar için tasarlanmıştır, bu yüzden biraz daha kısık olması normaldir. Büyük bir fark veya boğuk ses, ızgarasında tüy ya da su olduğunu gösterir.' }
    ],
    related: ['how-to-fix-iphone-speaker', 'how-to-fix-blown-speaker', 'decibel-meter-app-iphone'],
    faqLinks: ['does-water-eject-work-on-airpods', 'can-water-eject-fix-blown-speaker', 'is-clear-wave-free']
},
{
    id: 'decibel-meter-app-iphone',
    slug: 'desibel-olcer-iphone',
    navLabel: 'iPhone desibel ölçer',
    keyword: 'desibel ölçer iPhone',
    title: 'iPhone Desibel Ölçer: Gürültüyü dB Olarak Ölçün',
    description: 'iPhone’u desibel ölçere çevirin: gürültüyü dB olarak ölçün, hoparlör sesini ve güvenli seviyeleri kontrol edin. Clear Wave içinde hazır gelir.',
    h1: 'iPhone desibel ölçer: gürültü ve hoparlör ses seviyesi',
    shot: 'meter',
    quick: 'Bir desibel ölçer uygulaması, bir sesin yüksekliğini tahmin etmek için iPhone mikrofonunu kullanır. Hoparlörü temizlikten önce ve sonra karşılaştırmak, bir ortamın gürültüsünü ölçmek veya uzun maruziyette işitmeye zarar veren ~85 dB’nin altında kalmak için kullanın. Telefon ölçerleri yaklaşıktır: karşılaştırma için harika, sertifikalı ölçüm için değil.',
    intro: '<p>Desibel ölçer, «sanki daha kısık» hissini bir sayıya dönüştürür. Su veya toz çıkardıktan sonra hoparlörün normale döndüğünü kanıtlamak istediğinizde işe yarar — ve «bu mekân çok mu gürültülü?» ya da «çocuğumun tableti fazla mı yüksek?» gibi günlük sorularda da.</p>',
    manual: {
        heading: 'Desibel ölçerle hoparlör sesi nasıl ölçülür',
        steps: [
            { name: 'Bir referans ses seçin', text: 'Her seferinde aynı şarkı veya test tonu, aynı ses seviyesinde.' },
            { name: 'Mesafeyi sabitleyin', text: 'Ölçer olan başka bir cihazı hoparlörden hep aynı mesafede (ör. 30 cm) tutun veya ortamı iPhone’un kendisiyle ölçün.' },
            { name: 'Sessiz ortamda ölçün', text: 'Arka plan gürültüsü okumayı bozar.' },
            { name: 'Ortalamayı not edin', text: '10–15 saniye izleyin ve tipik değeri yazın.' },
            { name: 'Önce ve sonra karşılaştırın', text: 'Temizlikten sonra aynı koşullarla tekrar ölçün.' }
        ]
    },
    app: {
        heading: 'Clear Wave desibel ölçeri kullanın',
        steps: [
            { name: 'DB Meter’ı açın', text: 'İstendiğinde mikrofon erişimine izin verin — ölçerin dinleyebilmesi için gerekir.' },
            { name: 'Ölçmeye başlayın', text: 'Gösterge, mevcut seviyeyi «Normal konuşma» gibi bir etiketle dB olarak gösterir.' },
            { name: 'Ölçümü durdurun', text: 'Stop Monitoring’e dokunun. Okumalar cihazda işlenir.' }
        ]
    },
    sections: [
        { h2: 'Yaygın ses seviyeleri', html: '<div class="table-wrap"><table><thead><tr><th>Ses</th><th>Yaklaşık seviye</th></tr></thead><tbody><tr><td>Sessiz oda, fısıltı</td><td>30 dB</td></tr><tr><td>Normal konuşma</td><td>50–60 dB</td></tr><tr><td>Kalabalık cadde, elektrikli süpürge</td><td>70–80 dB</td></tr><tr><td>Uzun maruziyette (8 saat) işitme riski sınırı</td><td>85 dB</td></tr><tr><td>Konser, gece kulübü</td><td>100–110 dB</td></tr></tbody></table></div><p>Her +10 dB, yaklaşık iki kat daha yüksek algılanır.</p>' },
        { h2: 'iPhone desibel ölçer doğru mu?', html: '<p>iPhone mikrofonları iyidir, ancak laboratuvar ekipmanı gibi kalibre edilmemiştir ve konuşmaya göre ayarlanmıştır. Günlük seslerde birkaç dB’lik sapma bekleyin — aynı telefonda önce/sonra karşılaştırması için mükemmel. Yasal veya iş güvenliği ölçümleri için sertifikalı bir ses seviyesi ölçer kullanın.</p>' }
    ],
    faqs: [
        { q: 'iPhone desibel ölçebilir mi?', a: 'Evet, mikrofonu kullanan bir ölçer uygulamasıyla. Apple Watch ve Sağlık uygulaması da ortam gürültüsü seviyesini kaydeder.' },
        { q: 'Hangi desibel seviyesi güvenlidir?', a: 'Saatlerce yaklaşık 85 dB üzerindeki uzun maruziyet işitmeye zarar verebilir. Daha yüksek seslere kısa maruziyetin riski daha azdır.' },
        { q: 'Ölçer ses kaydeder mi?', a: 'Clear Wave ölçeri seviyeyi ölçmek için cihazınızda dinler. App Store’a göre hiçbir veri kimliğinizle ilişkilendirilmez.' }
    ],
    related: ['clean-iphone-speaker-dust', 'left-right-speaker-test', 'tone-generator-app-iphone'],
    faqLinks: ['is-clear-wave-free', 'does-water-eject-work', 'is-water-eject-safe']
},
{
    id: 'tone-generator-app-iphone',
    slug: 'frekans-ureteci-iphone',
    navLabel: 'iPhone frekans üreteci',
    keyword: 'frekans üreteci iPhone',
    title: 'iPhone Frekans Üreteci: Her Tonu Hz Olarak Çalın',
    description: 'iPhone’da istediğiniz test tonunu çalın: frekansı Hz olarak seçin, hoparlörü test etmek için pesten tize gidin veya su çıkarmak için 165 Hz çalın.',
    h1: 'iPhone frekans üreteci: hoparlörü her tonla test edin',
    shot: 'tone',
    quick: 'Frekans üreteci, seçtiğiniz frekansta saf bir sinüs dalgası çalar. Hoparlörün nerede tıkırdadığını, vızıldadığını veya zayıfladığını duymak için <strong>pesten tize yavaşça ilerleyin</strong> — ıslandıktan sonra telefon hoparlörünü kontrol etmenin hızlı yolu. Suyu çıkarmaya yardım etmesi için pes bir ton da (≈165 Hz) ayarlayabilirsiniz.',
    intro: '<p>Müzik kusurları gizler; tek bir saf ton onları ortaya çıkarır. Ses teknisyenlerinin frekans üreteci kullanmasının nedeni budur — ve su çıkardıktan sonra iPhone hoparlörünün tamamen temizlenip temizlenmediğini kontrol etmek için en iyi araçlardan biri olmasının nedeni de.</p>',
    manual: {
        heading: 'Frekans üreteciyle hoparlör nasıl test edilir',
        steps: [
            { name: 'Ses %50–70', text: 'Her şey bozulmadan kusurları duyacak kadar.' },
            { name: 'Peslerden başlayın', text: 'Yaklaşık 100–200 Hz. Küçük hoparlörler derin basları iyi çalamaz, bu yüzden çok pes tonların zayıf gelmesi normaldir.' },
            { name: 'Yavaşça yükselin', text: 'Konuşmanın bulunduğu orta frekanslardan (500–4000 Hz) geçin. Vızıltı ve tıkırtılara dikkat edin.' },
            { name: 'Tizleri kontrol edin', text: 'Düşük seste 10.000 Hz ve üstüne kadar devam edin. Eksik tizler ızgarada su veya toz olduğunu gösterebilir.' },
            { name: 'Sorunlu frekansları not edin', text: 'Tek bir notada tıkırtı kire, her yerde vızıltı arızaya işaret eder.' }
        ]
    },
    app: {
        heading: 'Clear Wave frekans üretecini kullanın',
        steps: [
            { name: 'Tone Generator’ı açın', text: 'Mevcut frekans ekranın ortasında görünür (örneğin 1028 Hz).' },
            { name: 'Yukarı veya aşağı kaydırın', text: 'Frekansı artırmak veya azaltmak ve aralığı taramak için kaydırın.' },
            { name: 'Tonu durdurun', text: 'Stop Tone’a dokunun. Tıkırtı duyarsanız su çıkarma yapıp tekrar test edin.' }
        ]
    },
    sections: [
        { h2: 'Kullanışlı test frekansları', html: '<div class="table-wrap"><table><thead><tr><th>Frekans</th><th>Kullanım</th></tr></thead><tbody><tr><td>~165 Hz</td><td>Telefon hoparlörlerinden su çıkarma tonu</td></tr><tr><td>440 Hz</td><td>Akort için referans la notası</td></tr><tr><td>1000 Hz</td><td>Standart test tonu</td></tr><tr><td>2000–4000 Hz</td><td>Konuşma netliği aralığı — boğukluk en çok burada fark edilir</td></tr><tr><td>10.000 Hz ve üstü</td><td>Tiz testi; kulağın hassasiyeti yaşla azalır</td></tr></tbody></table></div>' },
        { h2: 'İşitmenizi koruyun', html: '<p>Saf tonlar müzikten daha yüksek gelir ve daha çok yorar. Sesi orta seviyede tutun, hoparlörü kulağınıza dayamayın ve ara verin.</p>' }
    ],
    faqs: [
        { q: 'Frekans üreteci ne işe yarar?', a: 'Hoparlör ve kulaklıkları test etmeye, tıkırtıları bulmaya, kendi işitmenizi kontrol etmeye, enstrüman akort etmeye ve telefon hoparlöründen su çıkarmaya yardım eden pes tonlar çalmaya.' },
        { q: 'iPhone çok düşük frekansları çalabilir mi?', a: 'Çalar, ama küçük hoparlörler derin basları iyi veremez; bu yüzden yaklaşık 150 Hz altındaki tonlar zayıf gelir.' },
        { q: 'Clear Wave frekans üreteci ücretsiz mi?', a: 'Clear Wave ücretsiz indirilir. Bazı gelişmiş araçlar, ücretsiz denemesi olan isteğe bağlı aboneliğe dahildir.' }
    ],
    related: ['165-hz-water-eject-sound', 'iphone-speaker-crackling', 'decibel-meter-app-iphone'],
    faqLinks: ['what-frequency-removes-water-from-speaker', 'is-clear-wave-free', 'is-water-eject-safe']
}
];
