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
