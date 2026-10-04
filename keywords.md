# Clear Wave — Keyword Research & Page Map (EN)

_Updated 2026-09-28._

## How this was built
- **Demand signal:** your Google Trends export (`relatedQueries.csv`) — "how to fix speaker" (100), "fix my speaker" (33), "how to fix a speaker" (30), "fix iphone speaker" (21), "fix phone speaker" (17), "how to fix iphone speaker" (15), "fix blown speaker" (11)…
- **SERP review (Sep 2026):** "fix my speaker" / "water eject" page‑one results are dominated by exact‑match‑domain web tools (fixmyspeaker.io, fixmyspeakers.com, fixmyspeaker.net, watereject.com, …) and publishers (iGeeksBlog, Swappie, iPhoneLife). Those tools play a sound in the browser; none of them test, measure or repeat — that's our angle.
- **Apple guidance** (support.apple.com/102643: tap connector down, airflow, no heat, **no rice**, wait 30 min before charging) is used in guides to earn trust and AI‑overview citations.
- Volumes below are **directional tiers** (no paid tool access in this session). Plug the list into Google Keyword Planner / Ahrefs to get exact numbers and re‑prioritise.

Tiers: **Vol** H = high (10k+/mo US), M = medium (1k–10k), L = low (<1k). **KD** = difficulty to reach page one for a new‑ish domain. **Intent → download** = how likely a searcher installs an iPhone app.

## Strategy in one paragraph
Head terms ("fix my speaker", "water eject") are owned by web tools with exact‑match domains, so the homepage targets them but we don't bet on them. The downloads come from **iPhone‑specific, problem‑aware long‑tail** searches ("water in iphone speaker", "iphone speaker muffled after water", "water eject shortcut not working", "iphone speaker crackling") where the searcher is holding a wet iPhone right now and an App Store badge is the fastest answer. Every guide answers the question honestly first (Apple‑safe steps), then shows exactly how to do it in the app, with a CTA at the moment of need.

## Primary keywords (homepage `/`)
| Keyword | Vol | KD | Intent → download |
|---|---|---|---|
| water eject | H | High | High |
| water eject app / water eject iphone | M | Med | **Very high** |
| speaker fix / speaker fix app | M | Med | High |
| fix my speaker | H | High | Med (many want a web tool) |
| get water out of iphone speaker | M | Med | **Very high** |
| speaker cleaner (iphone) | M | Med | High |
| how to fix speaker | M | High | Med |

Title: `Water Eject App for iPhone – Speaker Fix & Cleaner | Clear Wave`

## Long‑tail clusters → one guide page each (`/guides/<slug>/`)
| # | Page | Primary keyword | Secondary / long tail | Vol | KD | Intent |
|---|---|---|---|---|---|---|
| 1 | `get-water-out-of-iphone-speaker` | how to get water out of iphone speaker | remove water from iphone speaker, water in iphone speaker, water stuck in speaker | M | Med | Very high |
| 2 | `water-eject-app-iphone` | water eject app | best water eject app, water eject iphone, water eject sound | M | Med | Very high |
| 3 | `fix-my-speaker` | fix my speaker | fix my speaker iphone, fix my speaker water, fix my speakers | H | High | Med‑high |
| 4 | `how-to-fix-iphone-speaker` | how to fix iphone speaker | fix iphone speaker, how to fix speaker on iphone, iphone speaker not working | M | Med | High |
| 5 | `iphone-speaker-muffled` | iphone speaker muffled | iphone speaker muffled after water, iphone sound muffled, speaker sounds underwater | M | Low‑med | Very high |
| 6 | `iphone-speaker-crackling` | iphone speaker crackling | iphone speaker distorted, iphone speaker static/buzzing | M | Low‑med | High |
| 7 | `water-eject-shortcut` | water eject shortcut | water eject shortcut not working, water eject shortcut alternative, siri water eject | M | Med | Very high |
| 8 | `165-hz-water-eject-sound` | 165 hz sound | water eject sound frequency, sound to get water out of phone | M | Med | High |
| 9 | `how-to-fix-blown-speaker` | how to fix a blown speaker | fix blown speaker, blown phone speaker, is my speaker blown | M | Med | Medium (diagnosis angle) |
| 10 | `clean-iphone-speaker-dust` | how to clean iphone speaker | clean iphone speaker dust, iphone speaker cleaner, clean speaker grill | M | Med | High |
| 11 | `iphone-dropped-in-water` | iphone dropped in water what to do | wet iphone, liquid detected in usb‑c/lightning connector, iphone fell in toilet | M‑H | Med | High |
| 12 | `left-right-speaker-test` | left right speaker test | stereo test, test iphone speakers, speaker test app | M | Low‑med | High |
| 13 | `decibel-meter-app-iphone` | decibel meter app iphone | db meter, sound meter app, how loud is my speaker | M | Med | High |
| 14 | `tone-generator-app-iphone` | tone generator app | frequency generator iphone, hz generator, test tone | M | Med | Medium‑high |

## FAQ questions → one answer page each (`/faq/<slug>/`)
Chosen from "People also ask"‑style questions with direct‑answer potential (good for AI Overviews / ChatGPT citations):

| Page | Question |
|---|---|
| `does-water-eject-work` | Does water eject actually work? |
| `is-water-eject-safe` | Is water eject safe for my iPhone speaker? |
| `how-long-for-water-to-leave-iphone-speaker` | How long does it take for water to leave an iPhone speaker? |
| `should-i-put-wet-iphone-in-rice` | Should I put my wet iPhone in rice? |
| `what-frequency-removes-water-from-speaker` | What frequency gets water out of a speaker? |
| `can-water-eject-fix-blown-speaker` | Can water eject fix a blown speaker? |
| `does-water-eject-work-on-airpods` | Does water eject work on AirPods? |
| `does-iphone-have-built-in-water-eject` | Does the iPhone have a built‑in water eject? |
| `how-many-times-run-water-eject` | How many times should I run water eject? |
| `is-clear-wave-free` | Is Clear Wave free? |

## On‑page rules applied to every page
- Primary keyword in `<title>` (≤ 60 chars), H1, first 100 words, URL slug, meta description (≤ 155 chars) and image alt.
- "Quick answer" box in the first screen (featured‑snippet / AI‑overview bait), then steps as an ordered list.
- Honest limits (blown speaker, saltwater, AirPods) → trust + fewer refunds/1★ reviews.
- App CTA placed right after the manual steps ("do this in one tap"), plus sticky mobile download bar.
- Internal links: every guide ↔ homepage, 3 related guides, related FAQ pages. FAQ pages ↔ their guide.
- Structured data: `MobileApplication`, `Organization`, `WebSite`, `HowTo`, `FAQPage`, `BreadcrumbList`, `Article`.
- Note: Google limits FAQ/HowTo rich results, but the markup still helps parsing and AI answers.

## Next steps (not done here)
1. Pull exact volumes (Keyword Planner) and re‑order the guide list.
2. Submit new URLs via Search Console + `npm run index:now`.
3. Translate the best 3–4 guides into ES/PT/DE/FR (non‑English "water eject" SERPs are much weaker).
4. App Store ASO: consider "water eject" + "speaker cleaner" in the 100‑char keyword field and "Water Eject & Speaker Cleaner" as subtitle test.

---

# RU — ключевые слова и карта страниц (`/ru/`)

_Добавлено 2026-09-28._ Русские страницы — не перевод, а отдельная семантика под Яндекс и Google.ru: люди ищут «айфон», «убрать/удалить воду», «хрипит», «глухой звук». Название приложения в русском App Store — **«Удалить воду из динамика»**, подзаголовок — «Чистый звук после намокания»; скриншоты в `assets/appstore/ru/` взяты из русской версии листинга.

Частотность — ориентировочная (проверьте в Яндекс Wordstat и уточните порядок).

## Главная `/ru/`
удалить воду из динамика · как убрать воду из динамика айфона · удаление воды из динамика iphone · очистка динамика iphone · приложение для удаления воды

## Инструкции `/ru/guides/<slug>/`
| Страница | Основной запрос | Хвосты |
|---|---|---|
| `kak-ubrat-vodu-iz-dinamika-iphone` | как убрать воду из динамика айфона | вода в динамике айфона, как вытряхнуть воду из динамика |
| `prilozhenie-dlya-udaleniya-vody-iz-dinamika` | приложение для удаления воды из динамика | удалить воду из динамика приложение, выталкивание воды iphone |
| `kak-pochinit-dinamik-telefona` | как починить динамик на телефоне | динамик телефона тихий, починить динамик самому |
| `ne-rabotaet-dinamik-iphone` | не работает динамик на айфоне | пропал звук на айфоне, тихий динамик iphone |
| `glukhoy-zvuk-iphone-posle-vody` | глухой звук на айфоне после воды | звук как из-под воды, глухой динамик |
| `khripit-dinamik-iphone` | хрипит динамик айфона | трещит динамик, искажается звук |
| `komanda-water-eject-dlya-iphone` | быстрая команда удаление воды | water eject команда, команда не работает |
| `zvuk-165-gts-dlya-udaleniya-vody` | звук 165 гц | частота для удаления воды из динамика |
| `sgorel-dinamik-telefona` | сгорел динамик на телефоне что делать | как понять что динамик сгорел |
| `kak-pochistit-dinamik-iphone` | как почистить динамик айфона | чистка динамика от пыли, сетка динамика |
| `iphone-upal-v-vodu` | айфон упал в воду что делать | обнаружена жидкость в разъёме, айфон в рис |
| `test-levogo-i-pravogo-dinamika` | проверка левого и правого динамика | стерео тест, тест динамиков |
| `shumomer-dlya-iphone` | шумомер для айфона | измерить децибелы iphone, децибелометр |
| `generator-chastot-dlya-iphone` | генератор частот для айфона | генератор тона, тестовый тон |

## Вопросы `/ru/faq/<slug>/`
работает ли удаление воды звуком · безопасно ли · сколько сохнет динамик · класть ли айфон в рис · какая частота выгоняет воду · поможет ли при сгоревшем динамике · удаление воды из AirPods · есть ли в iPhone функция удаления воды · сколько раз запускать · бесплатно ли Clear Wave

---

# ES — palabras clave y mapa de páginas (`/es/`)

_Añadido 2026-09-28._ Textos escritos para búsquedas en español (no traducción literal), en español neutro latinoamericano: el nombre de la app en el App Store es **«Limpiar bocina expulsar agua»** («Sonido claro tras mojarse»), y las capturas usan «altavoz», así que las páginas combinan **bocina** (México/LatAm) y **altavoz** (España). Capturas en `assets/appstore/es/` (localización es-MX del listado). Volúmenes: orientativos, verificar en Google Keyword Planner por país (MX, ES, AR, CO).

## Inicio `/es/`
expulsar agua del iPhone · sacar agua de la bocina del iPhone · sacar agua del altavoz del celular · limpiar bocina iPhone · app para expulsar agua

## Guías `/es/guides/<slug>/`
| Página | Búsqueda principal | Long tail |
|---|---|---|
| `como-sacar-agua-del-altavoz-iphone` | cómo sacar agua de la bocina del iPhone | le entró agua a la bocina, sacar agua del altavoz del celular |
| `app-para-expulsar-agua-del-iphone` | app para expulsar agua del iPhone | aplicación para sacar agua del celular |
| `arreglar-bocina-del-celular` | cómo arreglar la bocina del celular | bocina del celular suena bajito |
| `no-suena-la-bocina-del-iphone` | no suena la bocina del iPhone | iPhone sin sonido, bocina baja |
| `iphone-suena-apagado-despues-del-agua` | iPhone suena apagado después de mojarse | suena como bajo el agua |
| `bocina-del-iphone-suena-rasposa` | la bocina del iPhone suena rasposa | altavoz distorsionado, cruje |
| `atajo-water-eject-iphone` | atajo para expulsar agua del iPhone | water eject atajo no funciona |
| `sonido-165-hz-para-sacar-agua` | sonido 165 Hz para sacar agua | frecuencia para sacar agua del celular |
| `bocina-reventada-que-hacer` | cómo arreglar una bocina reventada | altavoz roto del celular |
| `como-limpiar-bocina-iphone` | cómo limpiar la bocina del iPhone | limpiar altavoz de polvo |
| `se-me-cayo-el-iphone-al-agua` | se me cayó el iPhone al agua qué hago | se detectó líquido en el conector, iPhone en arroz |
| `prueba-altavoz-izquierdo-derecho` | prueba de altavoz izquierdo y derecho | test estéreo |
| `medidor-de-decibeles-iphone` | medidor de decibeles para iPhone | sonómetro iPhone |
| `generador-de-frecuencias-iphone` | generador de frecuencias para iPhone | generador de tonos |

## Preguntas `/es/faq/<slug>/`
funciona expulsar agua con sonido · es seguro · cuánto tarda en secarse la bocina · meter el iPhone en arroz · qué frecuencia saca el agua · bocina reventada · AirPods · el iPhone tiene función para expulsar agua · cuántas veces · Clear Wave es gratis

---

# FR — mots-clés et plan des pages (`/fr/`)

_Ajouté 2026-09-29._ Textes rédigés pour les recherches en français (pas une traduction littérale). Nom de l’app sur l’App Store : **« Éjecter eau du haut-parleur »** (« Son clair après mouillage ») ; captures dans `assets/appstore/fr/` (localisation fr-CA du listing). Volumes indicatifs : à vérifier dans Google Keyword Planner (FR, BE, CH, CA).

## Accueil `/fr/`
éjecter l’eau iPhone · enlever l’eau du haut-parleur iPhone · nettoyer haut-parleur iPhone · application éjecter l’eau

## Guides `/fr/guides/<slug>/`
| Page | Requête principale | Longue traîne |
|---|---|---|
| `enlever-eau-haut-parleur-iphone` | enlever l’eau du haut-parleur iPhone | eau dans le haut-parleur, faire sortir l’eau de l’iPhone |
| `application-ejecter-eau-iphone` | application pour éjecter l’eau | appli éjecter eau iPhone |
| `reparer-haut-parleur-telephone` | réparer le haut-parleur du téléphone | haut-parleur faible |
| `haut-parleur-iphone-ne-marche-plus` | haut-parleur iPhone ne marche plus | plus de son iPhone |
| `son-etouffe-iphone-apres-eau` | son étouffé iPhone après l’eau | son sourd, comme sous l’eau |
| `haut-parleur-iphone-gresille` | haut-parleur iPhone grésille | crépite, son déformé |
| `raccourci-ejecter-eau-iphone` | raccourci éjecter l’eau iPhone | water eject raccourci ne marche pas |
| `son-165-hz-ejecter-eau` | son 165 Hz éjecter l’eau | fréquence pour enlever l’eau |
| `haut-parleur-grille-que-faire` | haut-parleur grillé téléphone | comment savoir si le haut-parleur est grillé |
| `nettoyer-haut-parleur-iphone` | nettoyer haut-parleur iPhone | poussière, grille |
| `iphone-tombe-dans-eau` | iPhone tombé dans l’eau que faire | liquide détecté dans le connecteur, iPhone dans le riz |
| `test-haut-parleur-gauche-droite` | test haut-parleur gauche droite | test stéréo |
| `sonometre-iphone` | sonomètre iPhone | décibelmètre, mesurer les décibels |
| `generateur-de-frequence-iphone` | générateur de fréquence iPhone | son de test |

## FAQ `/fr/faq/<slug>/`
éjecter l’eau par le son ça marche · sans danger · combien de temps sèche le haut-parleur · iPhone dans le riz · quelle fréquence · haut-parleur grillé · AirPods · l’iPhone a-t-il une fonction pour éjecter l’eau · combien de fois · Clear Wave gratuit

---

# DE — Keywords und Seitenplan (`/de/`)

_Hinzugefügt 2026-09-29._ Texte für deutsche Suchanfragen geschrieben (keine wörtliche Übersetzung), in der Du-Form wie das App-Store-Listing. App-Name im deutschen App Store: **„Wasser aus Lautsprecher“** („Klarer Klang nach Nässe“); Screenshots in `assets/appstore/de/`. Suchvolumen nur Richtwerte – im Google Keyword Planner für DE, AT, CH prüfen.

## Startseite `/de/`
Wasser aus Lautsprecher · Wasser aus iPhone-Lautsprecher entfernen · iPhone-Lautsprecher reinigen · App Wasser aus Lautsprecher

## Anleitungen `/de/guides/<slug>/`
| Seite | Haupt-Keyword | Longtail |
|---|---|---|
| `wasser-aus-iphone-lautsprecher-entfernen` | Wasser aus iPhone-Lautsprecher entfernen | Wasser im Lautsprecher, Wasser aus Handy bekommen |
| `app-wasser-aus-lautsprecher` | App Wasser aus Lautsprecher | Water Eject App |
| `handy-lautsprecher-reparieren` | Handy-Lautsprecher reparieren | Lautsprecher leise |
| `iphone-lautsprecher-funktioniert-nicht` | iPhone Lautsprecher funktioniert nicht | kein Ton iPhone |
| `iphone-lautsprecher-dumpf-nach-wasser` | iPhone Lautsprecher dumpf | klingt wie unter Wasser |
| `iphone-lautsprecher-knistert` | iPhone Lautsprecher knistert | rauscht, scheppert, verzerrt |
| `water-eject-kurzbefehl-iphone` | Water Eject Kurzbefehl | Kurzbefehl funktioniert nicht |
| `165-hz-ton-wasser-entfernen` | 165 Hz Ton | Frequenz Wasser entfernen |
| `lautsprecher-durchgebrannt-was-tun` | Handy Lautsprecher durchgebrannt | Lautsprecher kaputt erkennen |
| `iphone-lautsprecher-reinigen` | iPhone Lautsprecher reinigen | Staub, Gitter |
| `iphone-ins-wasser-gefallen` | iPhone ins Wasser gefallen was tun | Flüssigkeit im Anschluss erkannt, iPhone in Reis |
| `lautsprecher-test-links-rechts` | Lautsprecher Test links rechts | Stereotest |
| `dezibel-messen-iphone` | Dezibel messen iPhone | Schallpegelmesser, Dezibelmesser |
| `frequenzgenerator-iphone` | Frequenzgenerator iPhone | Tongenerator |

## FAQ `/de/faq/<slug>/`
funktioniert Wasser-Auswerfen mit Ton · ist es sicher · wie lange trocknet der Lautsprecher · iPhone in Reis · welche Frequenz · durchgebrannter Lautsprecher · AirPods · hat das iPhone eine Wasser-Auswurf-Funktion · wie oft · ist Clear Wave kostenlos

---

# IT — parole chiave e mappa delle pagine (`/it/`)

_Aggiunto 2026-09-29._ Testi scritti per le ricerche in italiano (non traduzione letterale), con il «tu» come nella scheda App Store. Nome dell’app nell’App Store italiano: **«Togliere l’acqua dal telefono»** («Suono chiaro dopo bagnato»); screenshot in `assets/appstore/it/`. Volumi indicativi: da verificare con Google Keyword Planner (IT, CH).

## Home `/it/`
togliere l’acqua dal telefono · togliere acqua altoparlante iPhone · pulire altoparlante iPhone · app per togliere l’acqua

## Guide `/it/guides/<slug>/`
| Pagina | Keyword principale | Long tail |
|---|---|---|
| `togliere-acqua-altoparlante-iphone` | come togliere l’acqua dall’altoparlante iPhone | acqua nell’altoparlante, suono per togliere l’acqua |
| `app-togliere-acqua-dal-telefono` | app per togliere l’acqua dal telefono | espulsione acqua iPhone app |
| `riparare-altoparlante-telefono` | riparare altoparlante telefono | altoparlante basso |
| `altoparlante-iphone-non-funziona` | altoparlante iPhone non funziona | iPhone senza audio |
| `audio-ovattato-iphone-dopo-acqua` | audio ovattato iPhone | suona sott’acqua |
| `altoparlante-iphone-gracchia` | altoparlante iPhone gracchia | frigge, distorce |
| `comando-rapido-espelli-acqua` | comando rapido espellere acqua | water eject non funziona |
| `suono-165-hz-togliere-acqua` | suono 165 Hz | frequenza per togliere l’acqua |
| `altoparlante-bruciato-cosa-fare` | altoparlante telefono bruciato | come capire se è bruciato |
| `pulire-altoparlante-iphone` | pulire altoparlante iPhone | polvere, griglia |
| `iphone-caduto-in-acqua` | iPhone caduto in acqua cosa fare | rilevato liquido nel connettore, iPhone nel riso |
| `test-altoparlante-destro-sinistro` | test altoparlante destro sinistro | test stereo |
| `misurare-decibel-iphone` | misurare decibel iPhone | fonometro |
| `generatore-di-frequenze-iphone` | generatore di frequenze iPhone | generatore di toni |

## FAQ `/it/faq/<slug>/`
funziona togliere l’acqua con il suono · è sicuro · quanto ci mette ad asciugarsi · iPhone nel riso · quale frequenza · altoparlante bruciato · AirPods · l’iPhone ha l’espulsione dell’acqua · quante volte · Clear Wave è gratis

---

# PT — palavras-chave e mapa de páginas (`/pt/`)

_Adicionado 2026-09-29._ Textos escritos para buscas em português do Brasil (não é tradução literal), com «você» como na página da App Store. Nome do app na App Store brasileira: **«Remover água do alto-falante»** («Som claro depois de molhar»); capturas em `assets/appstore/pt/`. O Brasil busca muito «som para tirar água do celular» — por isso esse termo aparece na home e no guia de 165 Hz. Volumes indicativos: confira no Google Keyword Planner (BR, PT).

## Início `/pt/`
tirar água do alto-falante do iPhone · som para tirar água do celular · limpar alto-falante do iPhone · app para tirar água do celular

## Guias `/pt/guides/<slug>/`
| Página | Palavra-chave principal | Cauda longa |
|---|---|---|
| `como-tirar-agua-do-alto-falante-iphone` | como tirar água do alto-falante do iPhone | entrou água no alto-falante |
| `app-para-tirar-agua-do-celular` | app para tirar água do celular | aplicativo para tirar água |
| `consertar-alto-falante-do-celular` | como consertar o alto-falante do celular | alto-falante baixo |
| `alto-falante-iphone-nao-funciona` | alto-falante do iPhone não funciona | iPhone sem som |
| `som-abafado-iphone-depois-da-agua` | som abafado no iPhone | som de debaixo d’água |
| `alto-falante-iphone-chiando` | alto-falante do iPhone chiando | estalando, distorcido |
| `atalho-para-tirar-agua-iphone` | atalho para tirar água do iPhone | water eject não funciona |
| `som-165-hz-tirar-agua` | som para tirar água do celular 165 Hz | frequência para tirar água |
| `alto-falante-estourado-o-que-fazer` | alto-falante do celular estourado | como saber se estourou |
| `limpar-alto-falante-iphone` | como limpar o alto-falante do iPhone | poeira, grade |
| `iphone-caiu-na-agua` | iPhone caiu na água o que fazer | líquido detectado no conector, iPhone no arroz |
| `teste-alto-falante-esquerdo-direito` | teste de som esquerdo e direito | teste estéreo |
| `medidor-de-decibeis-iphone` | medidor de decibéis iPhone | decibelímetro |
| `gerador-de-frequencia-iphone` | gerador de frequência iPhone | gerador de tons |

## Dúvidas `/pt/faq/<slug>/`
som para tirar água funciona · é seguro · quanto tempo seca · iPhone no arroz · qual frequência · alto-falante estourado · AirPods · iPhone tem função para tirar água · quantas vezes · Clear Wave é grátis

---

# TR — anahtar kelimeler ve sayfa haritası (`/tr/`)

_2026-09-29 eklendi._ Metinler Türkçe aramalar için yazıldı (birebir çeviri değil), resmî «siz» hitabıyla. Türkiye App Store’undaki adı: **«Hoparlörden suyu çıkar»**; ekran görüntüleri `assets/appstore/tr/` içinde. Türkiye’de en çok aranan ifade «hoparlör temizleme sesi» — bu yüzden 165 Hz rehberinin ana kelimesi o. Hacimler tahminidir: Google Keyword Planner’da (TR) doğrulayın.

## Ana sayfa `/tr/`
iPhone hoparlörden su çıkarma · hoparlör temizleme sesi · hoparlörden su çıkarma uygulaması · telefon hoparlöründen su çıkarma

## Rehberler `/tr/guides/<slug>/`
| Sayfa | Ana kelime | Uzun kuyruk |
|---|---|---|
| `iphone-hoparlorden-su-nasil-cikar` | iPhone hoparlörden su nasıl çıkar | hoparlöre su kaçtı |
| `hoparlorden-su-cikarma-uygulamasi` | hoparlörden su çıkarma uygulaması | su atma uygulaması |
| `telefon-hoparloru-tamiri` | telefon hoparlörü tamiri | hoparlör sesi az geliyor |
| `iphone-hoparlor-calismiyor` | iPhone hoparlör çalışmıyor | iPhone ses gelmiyor |
| `iphone-hoparlor-boguk-ses` | iPhone hoparlör boğuk ses | su altından gelen ses |
| `iphone-hoparlor-cizirti` | iPhone hoparlör cızırtı yapıyor | çıtırtı, parazit |
| `su-cikarma-kisayolu-iphone` | su çıkarma kısayolu iPhone | water eject çalışmıyor |
| `hoparlor-temizleme-sesi-165-hz` | hoparlör temizleme sesi | 165 Hz, su çıkarma frekansı |
| `hoparlor-patladi-ne-yapmali` | telefon hoparlörü patladı | patlak hoparlör nasıl anlaşılır |
| `iphone-hoparlor-temizleme` | iPhone hoparlör temizleme | toz, ızgara |
| `telefon-suya-dustu-ne-yapmali` | telefon suya düştü ne yapmalı | sıvı algılandı uyarısı, pirinç |
| `sol-sag-hoparlor-testi` | sol sağ ses testi | stereo test |
| `desibel-olcer-iphone` | desibel ölçer iPhone | ses seviyesi ölçer |
| `frekans-ureteci-iphone` | frekans üreteci iPhone | ton üreteci |

## SSS `/tr/faq/<slug>/`
sesle su çıkarma işe yarar mı · güvenli mi · ne kadar sürede kurur · pirince konur mu · hangi frekans · patlak hoparlör · AirPods · iPhone’da su çıkarma özelliği · kaç kez · Clear Wave ücretsiz mi

---

# HI — कीवर्ड और पेज मैप (`/hi/`)

_2026-10-04 को जोड़ा गया।_ Повод: GSC — хинглиш-запросы «phone se pani kaise nikale», «mobile ka pani kaise nikale», «फोन से पानी कैसे निकाले» стоят на позиции 1–3 на EN-главной, а Индия даёт больше всех кликов (24 из 165). Тексты написаны на хинди с вежливым «आप» и с английскими терминами там, где их так и ищут: iPhone, स्पीकर, ऐप, Hz. Slug — хинглиш. Название в индийском App Store на хинди: **«स्पीकर से पानी निकालो»** («गीलापन के बाद साफ आवाज़»), 5.0★ (2). Скриншоты в IN-сторе не локализованы (те же, что EN) и лежат в `assets/appstore/hi/`. Хинди-названия настроек Apple не проверены, рядом указаны английские. Объёмы ориентировочные: проверять в GSC (фильтр `/hi/`, страна IND).

## होम `/hi/`
phone se pani kaise nikale · फ़ोन से पानी कैसे निकालें · mobile ka pani kaise nikale · स्पीकर से पानी निकालो · iPhone स्पीकर क्लीनर

## गाइड `/hi/guides/<slug>/`
| Slug | Основной запрос | Длинный хвост |
|---|---|---|
| `iphone-speaker-se-pani-kaise-nikale` | iPhone स्पीकर से पानी कैसे निकालें | speaker se pani kaise nikale |
| `speaker-se-pani-nikalne-wala-app` | स्पीकर से पानी निकालने वाला ऐप | pani nikalne wala app |
| `phone-speaker-kaise-theek-kare` | फ़ोन स्पीकर कैसे ठीक करें | awaz kam aa rahi hai |
| `iphone-speaker-kaam-nahi-kar-raha` | iPhone स्पीकर काम नहीं कर रहा | iPhone me awaz nahi aa rahi |
| `iphone-awaz-dabi-hui` | iPhone स्पीकर की आवाज़ दबी हुई | पानी के अंदर जैसी आवाज़ |
| `iphone-speaker-se-khar-khar-awaz` | iPhone स्पीकर से खरखर आवाज़ | चटचट, भिनभिनाहट |
| `water-eject-shortcut-iphone` | water eject shortcut iPhone | शॉर्टकट नहीं चल रहा |
| `speaker-saaf-karne-wali-awaz-165-hz` | स्पीकर से पानी निकालने वाली आवाज़ | 165 Hz |
| `speaker-phat-gaya-kya-kare` | फ़ोन का स्पीकर फट गया | कैसे पहचानें |
| `iphone-speaker-saaf-kaise-kare` | iPhone स्पीकर कैसे साफ़ करें | धूल, जाली |
| `phone-pani-me-gir-gaya-kya-kare` | फ़ोन पानी में गिर गया क्या करें | mobile ka pani kaise nikale, चावल |
| `left-right-speaker-test` | left right speaker test | स्टीरियो टेस्ट |
| `decibel-meter-iphone` | डेसिबल मीटर iPhone | sound meter |
| `frequency-generator-iphone` | फ़्रीक्वेंसी जनरेटर iPhone | tone generator |

## सवाल-जवाब `/hi/faq/<slug>/`
Clear Wave क्या है · क्या आवाज़ से पानी निकलता है · safe है या नहीं · कितनी देर में सूखता है · चावल · कौन-सी फ़्रीक्वेंसी · फटा स्पीकर · AirPods से पानी · iPhone में water eject फ़ीचर · कितनी बार · क्या Clear Wave मुफ़्त है
