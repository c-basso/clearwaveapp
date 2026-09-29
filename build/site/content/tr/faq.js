// SSS. Her sorunun kendi /tr/faq/<slug>/ sayfası («Devamını oku») vardır.
module.exports = [
{
    id: 'does-water-eject-work', slug: 'sesle-su-cikarma-ise-yarar-mi',
    question: 'Sesle su çıkarma gerçekten işe yarar mı?',
    title: 'Sesle Su Çıkarma Gerçekten İşe Yarar mı?',
    description: 'Ses, iPhone hoparlöründeki suyu gerçekten çıkarır mı? Evet, ızgaradaki suyu. Nasıl çalıştığı, neyi çözmediği ve işe yarayıp yaramadığı nasıl anlaşılır.',
    short: 'Evet — yağmur, duş veya sıçramadan sonraki boğuk sesin çoğuna yol açan, hoparlör ızgarasında sıkışmış su için. Düşük frekanslı ses, zarın damlaları dışarı itmesini sağlar; çoğu zaman damlaları ızgarada görebilirsiniz.',
    body: '<p>Sesle su çıkarma işe yarar, çünkü hoparlör küçük bir pompadır. Pes bir tonla (yaklaşık 150–200 Hz) zar uzun hareketler yapar ve havayı — ve ızgaradaki suyu — deliklerden dışarı iter. Apple Watch’taki Su Kilidi de aynı prensiple çalışır.</p><h2>Neyi çözer</h2><ul class="check-list"><li>Islandıktan sonra boğuk veya «su altından gelen» ses</li><li>Duş, yağmur veya sıçramadan sonra kısılan ses</li><li>Zardaki damlaların yaptığı cızırtı</li><li>Kısmen, ızgaradaki gevşek toz</li></ul><h2>Neyi çözmez</h2><ul class="check-list check-list--no"><li>Telefonun elektronik aksamına girmiş su</li><li>Patlamış veya fiziksel olarak hasar görmüş hoparlör</li><li>Deniz suyu veya şekerli içeceklerin günlerce bıraktığı korozyon</li></ul><h2>İşe yaradığı nasıl anlaşılır</h2><p>Aynı konuşmalı videoyu önce ve sonra oynatın. Daha iyisi: stereo test ve yavaş bir frekans taraması yapın; iki kanal da tıkırtısız ve eşit derecede temiz çalmalı.</p>',
    guide: 'water-eject-app-iphone'
},
{
    id: 'is-water-eject-safe', slug: 'sesle-su-cikarma-guvenli-mi',
    question: 'Hoparlörden sesle su çıkarmak güvenli mi?',
    title: 'iPhone Hoparlöründen Sesle Su Çıkarmak Güvenli mi?',
    description: 'Su çıkarma sesi iPhone hoparlörüne zarar verir mi? Normal seste hayır. Nedeni, hangi ses seviyesinin kullanılacağı ve kaçınılması gereken hatalar.',
    short: 'Evet. Su çıkarma sesi, müzik gibi normal seste çalınan sıradan bir sestir. %70–80’de tutun, uzun süre maksimumda çalmayın ve güçlü bir tıkırtı duyarsanız durun.',
    body: '<p>iPhone hoparlörü gün boyu bas, konuşma ve alarm çalmak için tasarlanmıştır. 30–60 saniyelik pes bir ton, kapasitesinin çok içindedir. Hasara yol açan, özellikle bobini ısıtan ağır baslarla <em>uzun süre</em> maksimumda çalmaktır.</p><h2>Güvenli kullanım</h2><ul class="check-list"><li>Ses %100 değil, %70–80</li><li>Döngü başına 30–60 saniye, aralarda kısa mola</li><li>Hoparlör aşağı bakıyor</li><li>Güçlü vızıltı veya tıkırtı duyarsanız durun</li></ul><h2>Sesle su çıkarmaktan daha riskli olanlar</h2><ul class="check-list check-list--no"><li>Saç kurutma makinesi ve diğer ısı kaynakları</li><li>Izgaraya basınçlı hava</li><li>Deliklere iğne veya kulak çubuğu</li><li>Pirinç (Apple önermiyor)</li></ul>',
    guide: 'get-water-out-of-iphone-speaker'
},
{
    id: 'how-long-for-water-to-leave-iphone-speaker', slug: 'hoparlor-ne-kadar-surede-kurur',
    question: 'iPhone hoparlörü ne kadar sürede kurur?',
    title: 'iPhone Hoparlörü Ne Kadar Sürede Kurur?',
    description: 'iPhone hoparlörü kendi kendine birkaç saatte ya da bir günde kurur. Su çıkarma sesiyle genellikle 30–60 saniyelik 1–3 döngü yeterlidir.',
    short: 'Kendi kendine birkaç saatten bir güne kadar. Su çıkarma sesiyle suyun çoğu 30–60 saniyelik 1–3 döngüde çıkar; suya düştükten sonra 5 döngüye kadar ve ardından havada kurutma gerekebilir.',
    body: '<p>Izgaradaki su yavaş buharlaşır, çünkü boşluk küçük ve kapalıdır. Bu yüzden duş veya yağmurdan sonra ses saatlerce boğuk kalabilir.</p><div class="table-wrap"><table><thead><tr><th>Durum</th><th>Yardımsız</th><th>Sesle su çıkarma</th></tr></thead><tbody><tr><td>Sıçrama, yağmur, duş buharı</td><td>1–4 saat</td><td>1–2 döngü</td></tr><tr><td>Kısa dalış (lavabo, su birikintisi)</td><td>Birkaç saat</td><td>2–3 döngü + 30 dk kuruma</td></tr><tr><td>Havuz, klozet, uzun dalış</td><td>24 saate kadar</td><td>3–5 döngü + birkaç saat kuruma</td></tr></tbody></table></div><p>Apple, ıslak bir iPhone’u şarj etmeden önce en az 30 dakika, sıvı uyarısı çıkarsa 24 saate kadar beklemeyi önerir.</p>',
    guide: 'get-water-out-of-iphone-speaker'
},
{
    id: 'should-i-put-wet-iphone-in-rice', slug: 'islak-iphone-pirince-konur-mu',
    question: 'Islak iPhone pirince konur mu?',
    title: 'Islak iPhone Pirince Konur mu? Apple Hayır Diyor',
    description: 'Apple ıslak iPhone’u pirince koymayı önermiyor: parçacıklar cihaza zarar verebilir. Onun yerine yapılacaklar: hafifçe vurun, kurutun, sesle su çıkarın.',
    short: 'Hayır. Apple bunu önermiyor, çünkü küçük pirinç parçacıkları iPhone’un içine girebilir. Giriş aşağı bakarken hafifçe vurun, havada kurumaya bırakın ve hoparlördeki su için su çıkarma sesi kullanın.',
    body: '<p>Pirinç hilesi eskimiş bir efsanedir. Pirinç suyu açık havadan daha hızlı çekmez; nişasta tozu ve kırık taneler şarj girişine ve hoparlör ızgaralarına girebilir. <a href="https://support.apple.com/tr-tr/102643" rel="noopener" target="_blank">Apple’ın destek makalesi</a> bunu yapmamanızı açıkça söyler.</p><h2>Onun yerine ne yapmalı</h2><ol class="steps-inline"><li>Telefonu kurulayın ve kılıfı çıkarın.</li><li>Şarj girişi aşağı bakacak şekilde avucunuza hafifçe vurun.</li><li>Hoparlör aşağıdayken 2–3 su çıkarma döngüsü yapın.</li><li>Kuru ve havadar bir yere bırakın; şarj etmeden önce en az 30 dakika bekleyin.</li></ol>',
    guide: 'iphone-dropped-in-water'
},
{
    id: 'what-frequency-removes-water-from-speaker', slug: 'suyu-hangi-frekans-cikarir',
    question: 'Hoparlördeki suyu hangi frekans çıkarır?',
    title: 'Hoparlördeki Suyu Hangi Frekans Çıkarır? (165 Hz)',
    description: '150–200 Hz arası düşük frekanslar, özellikle 165 Hz, telefon hoparlöründeki suyu en iyi çıkarır. Pes tonların neden işe yaradığını öğrenin.',
    short: 'En iyi, yaklaşık 150–200 Hz arası düşük frekanslar çalışır; en yaygını 165 Hz’dir. Pes tonlarda zar daha uzun hareketler yapar ve suyu ızgaradan dışarı iter.',
    body: '<p>Aynı ses seviyesinde, daha pes bir ton zarı daha çok hareket ettirir. Bu uzun hareket havayı — ve suyu — ızgaradan dışarı pompalar. Ancak yaklaşık 100 Hz’in çok altında küçük bir telefon hoparlörü tonu iyi çalamaz. Pratik aralık 150–200 Hz’dir; 165 Hz ise meşhur Siri kısayolu sayesinde standart hâline geldi.</p><p>Tonu biraz değiştiren seanslar inatçı damlaları gevşetmeye yardım eder. Ardından hoparlörün tüm aralıkta temiz çaldığını doğrulamak için bir frekans üreteciyle yüksek frekansları tarayın.</p>',
    guide: '165-hz-water-eject-sound'
},
{
    id: 'can-water-eject-fix-blown-speaker', slug: 'patlak-hoparlore-su-cikarma',
    question: 'Su çıkarma patlak hoparlörü düzeltir mi?',
    title: 'Sesle Su Çıkarma Patlak Hoparlörü Düzeltir mi?',
    description: 'Sesle su çıkarma patlak hoparlörü düzeltmez, ama «patlak» sanılanların çoğu sadece ıslak veya tıkalıdır. 2 dakikada nasıl ayırt edilir, öğrenin.',
    short: 'Hayır — gerçekten patlamış bir hoparlörde fiziksel hasar vardır ve değiştirilmesi gerekir. Ama «patlak» görünenlerin çoğu sadece ıslak veya tıkalıdır ve su çıkarma sorunu çözer. Servise para vermeden önce test edin.',
    body: '<p>Patlak hoparlörün zarı yırtılmış veya bobini hasar görmüştür. Hiçbir ses, frekans veya uygulama bunu onaramaz. İyi haber: su ve kir neredeyse aynı belirtilere — cızırtı, vızıltı, bozulma — yol açar ve bunların çözümü vardır.</p><h2>2 dakikalık test</h2><ol class="steps-inline"><li>2–3 su çıkarma döngüsü yapın.</li><li>%50 seste temiz bir ses çalın. Hâlâ bozuk mu? Patlamış olabilir.</li><li>Stereo test yapın. Bir taraf her seste bozuluyorsa hasarlı olan muhtemelen odur.</li><li>Frekans üreteciyle pesten tize tarayın. Her yerde vızıltı = arıza; tek notada tıkırtı = kir.</li></ol>',
    guide: 'how-to-fix-blown-speaker'
},
{
    id: 'does-water-eject-work-on-airpods', slug: 'airpodstan-su-cikarma',
    question: 'Sesle su çıkarma AirPods’ta işe yarar mı?',
    title: 'AirPods’tan Sesle Su Çıkarılabilir mi?',
    description: 'AirPods’taki su sesle çıkarılabilir mi? Yalnızca kısmen. Neyin yardımcı olduğu, Apple’ın önerisi ve sol ile sağ AirPod’un nasıl test edileceği.',
    short: 'Yalnızca kısmen. Bağlı AirPods üzerinden su çıkarma sesi çalabilirsiniz, ama hoparlörleri küçük ve kapalı olduğu için etkisi sınırlıdır. Tüy bırakmayan bir bezle kurulayın, kurumaya bırakın, sonra sol ve sağ kanalı test edin.',
    body: '<p>AirPods bağlıyken ses — su çıkarma sesi dahil — iPhone hoparlöründen değil, kulaklıkların kendi hoparlörlerinden çıkar. Bu, filtredeki suyun bir kısmını hareket ettirebilir, ama kulaklıklar minik ve kapalıdır: ses değil kurutma önemlidir.</p><h2>Islak AirPods için yapılacaklar</h2><ul class="check-list"><li>Yumuşak, kuru ve tüy bırakmayan bir bezle silin.</li><li>Şarj kutusuna koymadan önce tamamen kurumasını bekleyin.</li><li>Filtreye ısı, basınçlı hava veya sivri cisim kullanmayın.</li><li>Kuruduktan sonra ikisinin de aynı çaldığını görmek için stereo test yapın.</li></ul><p>AirPods (3. nesil), AirPods Pro ve sonrası tere ve suya dayanıklıdır, ama su geçirmez değildir.</p>',
    guide: 'left-right-speaker-test'
},
{
    id: 'does-iphone-have-built-in-water-eject', slug: 'iphoneda-su-cikarma-ozelligi-var-mi',
    question: 'iPhone’da su çıkarma özelliği var mı?',
    title: 'iPhone’da Su Çıkarma Özelliği Var mı? Hayır, Nedeni Bu',
    description: 'iPhone’da su çıkarma düğmesi yok: yalnızca Apple Watch’ta Su Kilidi var. iPhone hoparlöründen suyu kısayolla veya uygulamayla nasıl çıkaracağınızı öğrenin.',
    short: 'Hayır. Yerleşik su çıkarma yalnızca Apple Watch’ta (Su Kilidi) bulunur. iPhone’da Clear Wave gibi bir uygulamaya veya topluluk tarafından hazırlanmış bir Siri kısayoluna ihtiyacınız var.',
    body: '<p>Apple Watch’taki Su Kilidi, yüzdükten sonra hoparlördeki suyu çıkarmak için bir dizi ses çalar. Fizik aynı olsa da iPhone’da benzer bir ayar yoktur. iPhone XS/XR ve sonrası şarj girişinde sıvı olduğunda uyarır, ama bu çıkarma değil algılamadır.</p><h2>iPhone’daki seçenekleriniz</h2><ul class="check-list"><li><strong>Su çıkarma uygulaması</strong>: tek dokunuş, çevrimdışı, sonucu doğrulamak için testlerle.</li><li><strong>Siri kısayolu</strong>: topluluk yapımı, üçüncü taraf siteden içe aktarılır; iOS güncellemesinden sonra bozulabilir.</li><li><strong>Bir web sitesindeki ses</strong>: internet ve açık ekran gerektirir.</li></ul>',
    guide: 'water-eject-shortcut'
},
{
    id: 'how-many-times-run-water-eject', slug: 'kac-kez-su-cikarma',
    question: 'Su çıkarma sesini kaç kez çalmalıyım?',
    title: 'Hoparlörden Su Çıkarma Sesi Kaç Kez Çalınmalı?',
    description: 'Sıçramadan sonra 2–3 kez, suya düştükten sonra 5 kereye kadar, her biri 30–60 saniye çalın. Hoparlörün temizlendiği nasıl anlaşılır, öğrenin.',
    short: 'Sıçrama, yağmur veya duş buharından sonra 30–60 saniyelik 2–3 döngü. Suya düştükten sonra (havuz, klozet) aralarda birkaç dakika kurutarak 5 döngüye kadar. Stereo testte iki taraf da temiz çaldığında durun.',
    body: '<p>Daha fazlası her zaman daha iyi değildir. Su çıktıktan sonra ek döngüler bir şey yapmaz. Döngüler arasında kısa bir testle karar verin.</p><div class="table-wrap"><table><thead><tr><th>Durum</th><th>Döngü</th></tr></thead><tbody><tr><td>Sıçrama, çisenti, duş buharı</td><td>1–2</td></tr><tr><td>Sağanak yağmur, lavaboya düşme</td><td>2–3</td></tr><tr><td>Havuz, klozet, küvet</td><td>3–5 + havada kurutma, bir saat sonra tekrar</td></tr></tbody></table></div><p>5 döngü ve 24 saat kurumadan sonra ses hiç düzelmediyse muhtemelen sorun su değildir — hoparlörde toz veya arıza olup olmadığını kontrol edin.</p>',
    guide: 'get-water-out-of-iphone-speaker'
},
{
    id: 'is-clear-wave-free', slug: 'clear-wave-ucretsiz-mi',
    question: 'Clear Wave ücretsiz mi?',
    title: 'Clear Wave Ücretsiz mi? Fiyat ve Uygulamada Neler Var',
    description: 'Clear Wave, iPhone ve iPad için ücretsiz indirilir. Ücretsiz denemeli isteğe bağlı abonelik tüm araçları açar. Neler var ve nasıl iptal edilir.',
    short: 'Clear Wave, iPhone ve iPad için ücretsiz indirilir. Uygulama içi isteğe bağlı abonelik (ücretsiz denemeli) tüm araçlara tam erişim verir: su çıkarma, stereo test, frekans üreteci ve desibel ölçer.',
    body: '<p>Clear Wave — App Store’da <em>«Hoparlörden suyu çıkar»</em> — ücretsiz indirilir. Araçlara tam erişim, ücretsiz denemesi ve ömür boyu seçeneği olan isteğe bağlı uygulama içi satın alımlarla gelir. App Store, bir şeyi onaylamadan önce güncel fiyatı kendi para biriminizde gösterir.</p><h2>Uygulamada neler var</h2><ul class="check-list"><li>Su çıkarma ve hoparlör temizleme seansları</li><li>Sol/sağ stereo test</li><li>Frekans üreteci (frekansı değiştirmek için kaydırın)</li><li>Desibel ölçer</li></ul><h2>Aboneliği yönetme</h2><p>Abonelikler Apple tarafından yönetilir. İptal etmek için iPhone’da: <em>Ayarlar → [adınız] → Abonelikler</em>. Aile Paylaşımı desteklenir.</p>',
    guide: 'water-eject-app-iphone'
}
];
