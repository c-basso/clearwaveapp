// FAQ entries. Each gets its own /faq/<slug>/ page ("Learn more") and appears on the homepage.
// short = homepage answer (1–2 sentences), body = full answer page HTML.
module.exports = [
{
    slug: 'what-is-clear-wave',
    question: 'What is Clear Wave?',
    title: 'What Is Clear Wave? The Water Eject App for iPhone',
    description: 'Clear Wave is a free iPhone and iPad app that ejects water and dust from your speaker with sound, then tests it. What it does and how to get it.',
    short: 'Clear Wave is a free iPhone and iPad app (App Store name: “Speaker Fix – Water Eject”) that pushes water and dust out of your speaker with tuned sound waves, then checks the result with a stereo test, tone generator and dB meter.',
    body: '<p>Clear Wave is an iOS app for fixing a speaker that sounds muffled, quiet or crackly after it got wet or dusty. On the App Store it is listed as <em>“Speaker Fix – Water Eject”</em>; Clear Wave is the brand and this website.</p><h2>What Clear Wave does</h2><ul class="check-list"><li><strong>Water eject &amp; speaker cleaner</strong>: tuned low-frequency sound sessions push water out of the grille and loosen dust.</li><li><strong>Stereo test</strong>: plays the left and right channel separately.</li><li><strong>Tone generator</strong>: any frequency, to find rattles and missing ranges.</li><li><strong>dB meter</strong>: measures loudness before and after cleaning.</li></ul><h2>Is there a Clear Wave online or web version?</h2><p>No. Clear Wave is a native app for iPhone and iPad (iOS 17.1+); it works offline, so you don’t need a browser tab open while the sound plays. This website has free step-by-step guides that work without the app. But you can play a <a href="/guides/165-hz-water-eject-sound/">free 165 Hz water eject tone online</a> right in your browser.</p><h2>Who makes it</h2><p>Clear Wave is made by an independent developer and is not affiliated with Apple or with other products that use the name “Clear Wave”. It is free to download; full access to all tools is an optional in-app purchase with a free trial.</p>',
    guide: 'water-eject-app-iphone'
},
{
    slug: 'does-water-eject-work',
    question: 'Does water eject actually work?',
    title: 'Does Water Eject Actually Work? (Honest Answer)',
    description: 'Does water eject really work on iPhone? Yes — for water in the speaker grille. How it works, what it can\'t fix, and how to tell if it worked.',
    short: 'Yes — for water trapped in the speaker grille, which causes most muffled sound after rain, showers or splashes. Low-frequency sound makes the speaker membrane push droplets out; you can often see them appear on the mesh.',
    body: '<p>Water eject works because a speaker is a tiny pump. When it plays a low tone (around 150–200 Hz), the membrane moves back and forth in long strokes and pushes air — and any water in the grille — out through the holes. It\'s the same principle Apple uses in Apple Watch\'s Water Lock.</p><h2>What water eject fixes</h2><ul class="check-list"><li>Muffled or "underwater" sound after getting wet</li><li>Lower volume after a shower, rain or a splash</li><li>Crackling caused by droplets on the membrane</li><li>Loose dust sitting on the mesh (partly)</li></ul><h2>What it can\'t fix</h2><ul class="check-list check-list--no"><li>Water inside the phone\'s electronics</li><li>A blown or physically damaged speaker</li><li>Corrosion from salt water or sugary drinks left for days</li></ul><h2>How to tell if it worked</h2><p>Play the same voice video before and after. Better: run a left/right stereo test and a slow tone sweep — both channels should sound equally clear with no rattles.</p>',
    guide: 'water-eject-app-iphone'
},
{
    slug: 'is-water-eject-safe',
    question: 'Is water eject safe for my iPhone speaker?',
    title: 'Is Water Eject Safe for iPhone Speakers?',
    description: 'Is it safe to use a water eject sound on your iPhone? Yes, at normal volume. Here is why, the volume to use, and the mistakes that can cause damage.',
    short: 'Yes. A water eject tone is ordinary audio played at normal volume, like music. Keep the volume around 70–80%, avoid long runs at maximum, and stop if you hear harsh rattling.',
    body: '<p>Your iPhone speaker is designed to play bass, voices and alarms all day. A 30–60 second low tone is well within what it handles. What causes damage is <em>extended</em> playback at maximum volume, especially bass-heavy audio, which heats the voice coil.</p><h2>Safe-use checklist</h2><ul class="check-list"><li>Volume 70–80%, not 100%</li><li>30–60 seconds per cycle, a short pause between cycles</li><li>Speaker facing down</li><li>Stop if you hear loud buzzing or rattling</li></ul><h2>What\'s riskier than water eject</h2><ul class="check-list check-list--no"><li>Hair dryers and other heat sources</li><li>Compressed air into the grille</li><li>Poking the holes with pins or cotton swabs</li><li>Rice (Apple advises against it)</li></ul>',
    guide: 'get-water-out-of-iphone-speaker'
},
{
    slug: 'how-long-for-water-to-leave-iphone-speaker',
    question: 'How long does it take for water to leave an iPhone speaker?',
    title: 'How Long Does Water Take to Leave an iPhone Speaker?',
    description: 'On its own, water can take hours to a day to leave an iPhone speaker. With a water eject tone it usually takes 1–3 cycles of 30–60 seconds.',
    short: 'Left alone, several hours to a full day. With a water eject tone, most of it comes out in 1–3 cycles of 30–60 seconds; heavy exposure may need up to 5 cycles plus air-drying.',
    body: '<p>Water in the speaker grille evaporates slowly because the cavity is small and enclosed. That\'s why sound can stay muffled for hours after a shower or rain.</p><div class="table-wrap"><table><thead><tr><th>Situation</th><th>Without help</th><th>With water eject</th></tr></thead><tbody><tr><td>Splash, rain, shower steam</td><td>1–4 hours</td><td>1–2 cycles</td></tr><tr><td>Brief dunk (sink, puddle)</td><td>Several hours</td><td>2–3 cycles + 30 min drying</td></tr><tr><td>Pool, toilet, long submersion</td><td>Up to 24 hours</td><td>3–5 cycles + several hours drying</td></tr></tbody></table></div><p>Apple recommends waiting at least 30 minutes before charging a wet iPhone, and up to 24 hours if a liquid-detected alert appears.</p>',
    guide: 'get-water-out-of-iphone-speaker'
},
{
    slug: 'should-i-put-wet-iphone-in-rice',
    question: 'Should I put my wet iPhone in rice?',
    title: 'Should You Put a Wet iPhone in Rice? (Apple Says No)',
    description: 'Apple says not to put a wet iPhone in rice — particles can damage it. What to do instead: tap, air-dry, and eject water from the speaker with sound.',
    short: 'No. Apple specifically advises against it because small rice particles can get into the iPhone. Tap it gently with the connector facing down, let it air-dry, and use a water eject tone for the speaker.',
    body: '<p>The rice trick is a myth that outlived its usefulness. Rice doesn\'t pull water out faster than open air, and starch dust and broken grains can end up in the charging port and speaker grilles. <a href="https://support.apple.com/en-us/102643" rel="noopener" target="_blank">Apple\'s own support article</a> says not to do it.</p><h2>Do this instead</h2><ol class="steps-inline"><li>Wipe the phone and remove the case.</li><li>Tap it gently against your palm with the charging port facing down.</li><li>Run 2–3 water eject cycles with the speaker facing down.</li><li>Leave it in a dry place with airflow; wait at least 30 minutes before charging.</li></ol>',
    guide: 'iphone-dropped-in-water'
},
{
    slug: 'what-frequency-removes-water-from-speaker',
    question: 'What frequency gets water out of a speaker?',
    title: 'What Frequency Gets Water Out of a Speaker? (165 Hz)',
    description: 'Low frequencies around 150–200 Hz — most commonly 165 Hz — push water out of phone speakers best. Why low tones work and how to play them safely.',
    short: 'Low frequencies around 150–200 Hz work best; 165 Hz is the most widely used. Low tones make the speaker membrane move further on each stroke, pushing water through the grille.',
    body: '<p>At the same volume, a lower tone forces the speaker membrane to travel further. That long stroke pumps air — and water — out of the grille. Go much lower than ~100 Hz, though, and a small phone speaker can\'t reproduce the tone well. The 150–200 Hz band is the practical sweet spot, and 165 Hz became the standard thanks to the popular Siri shortcut.</p><p>Sessions that vary the tone slightly can help dislodge stubborn droplets. Afterwards, sweep higher frequencies with a tone generator to confirm the speaker sounds clean across the range.</p>',
    guide: '165-hz-water-eject-sound'
},
{
    slug: 'can-water-eject-fix-blown-speaker',
    question: 'Can water eject fix a blown speaker?',
    title: 'Can Water Eject Fix a Blown Speaker?',
    description: 'Water eject cannot repair a blown speaker, but many "blown" phone speakers are just wet or clogged. How to tell the difference in two minutes.',
    short: 'No — a truly blown speaker is physically damaged and needs replacement. But many speakers that sound "blown" are just wet or clogged, and water eject fixes those. Test before you pay for a repair.',
    body: '<p>A blown speaker has a torn membrane or a damaged voice coil. No sound, frequency or app can repair that. The good news: water and debris create almost identical symptoms — crackling, buzzing, distortion — and those are fixable.</p><h2>2-minute test</h2><ol class="steps-inline"><li>Run 2–3 water eject cycles.</li><li>Play clean audio at 50% volume. Still distorted? Possibly blown.</li><li>Run a left/right stereo test. One side distorted at every volume = that speaker is likely damaged.</li><li>Sweep a tone generator from low to high. Buzzing across the whole range = damage; one rattling pitch = debris.</li></ol>',
    guide: 'how-to-fix-blown-speaker'
},
{
    slug: 'does-water-eject-work-on-airpods',
    question: 'Does water eject work on AirPods?',
    title: 'Does Water Eject Work on AirPods?',
    description: 'Can you eject water from AirPods with a sound? Partly — here is what helps, what Apple recommends, and how to test left and right AirPods afterwards.',
    short: 'Only partly. You can play a water eject tone through connected AirPods, but their drivers are small and sealed, so the effect is limited. Dry them with a lint-free cloth, let them air-dry, then test left and right channels.',
    body: '<p>When AirPods are connected, audio — including a water eject tone — plays through the AirPods\' own drivers, not the iPhone speaker. That can move a little water off the mesh, but earbuds are tiny and sealed, so drying time matters more than sound.</p><h2>What to do with wet AirPods</h2><ul class="check-list"><li>Wipe them with a soft, dry, lint-free cloth.</li><li>Leave them to dry fully before putting them in the charging case.</li><li>Don\'t use heat, compressed air or sharp objects on the mesh.</li><li>Once dry, run a left/right stereo test to check both earbuds sound the same.</li></ul><p>AirPods (3rd generation), AirPods Pro and later are sweat and water resistant, not waterproof.</p>',
    guide: 'left-right-speaker-test'
},
{
    slug: 'does-iphone-have-built-in-water-eject',
    question: 'Does the iPhone have a built-in water eject?',
    title: 'Does iPhone Have a Built-in Water Eject? (No — Here\'s Why)',
    description: 'iPhone has no built-in water eject button — only Apple Watch has Water Lock. How to eject water on iPhone with a shortcut or an app instead.',
    short: 'No. Only Apple Watch has a built-in water eject (Water Lock). On iPhone you need a water eject app like Clear Wave or a community Siri shortcut.',
    body: '<p>Apple Watch\'s Water Lock plays a series of tones to push water out of its speaker after swimming. iPhone has no equivalent setting, even though the physics is the same. The iPhone does warn you about liquid in the charging port on iPhone XS/XR and later, but that\'s detection, not ejection.</p><h2>Your options on iPhone</h2><ul class="check-list"><li><strong>Water eject app</strong> — one tap, offline, with tests to confirm the result.</li><li><strong>Siri Shortcut</strong> — community-made, imported from a third-party site; can break after iOS updates.</li><li><strong>Web tone</strong> — needs internet and the screen kept on.</li></ul>',
    guide: 'water-eject-shortcut'
},
{
    slug: 'how-many-times-run-water-eject',
    question: 'How many times should I run water eject?',
    title: 'How Many Times Should You Run Water Eject?',
    description: 'Run water eject 2–3 times for splashes and up to 5 times after submersion, 30–60 seconds each. How to know when the speaker is clear.',
    short: '2–3 cycles of 30–60 seconds for splashes, rain or shower steam. Up to 5 cycles after submersion (pool, toilet), with a few minutes of drying between them. Stop when a stereo test sounds clear on both sides.',
    body: '<p>More isn\'t always better. After the water is out, extra cycles do nothing. Use a quick test between cycles to decide.</p><div class="table-wrap"><table><thead><tr><th>Exposure</th><th>Cycles</th></tr></thead><tbody><tr><td>Splash, drizzle, shower steam</td><td>1–2</td></tr><tr><td>Heavy rain, sink dunk</td><td>2–3</td></tr><tr><td>Pool, toilet, bath</td><td>3–5 + air-dry, repeat after 1 hour</td></tr></tbody></table></div><p>If sound hasn\'t improved at all after 5 cycles and 24 hours of drying, the issue is probably not water — check for dust or speaker damage.</p>',
    guide: 'get-water-out-of-iphone-speaker'
},
{
    slug: 'is-clear-wave-free',
    question: 'Is Clear Wave free?',
    title: 'Is Clear Wave Free? Pricing & What\'s Included',
    description: 'Clear Wave is free to download on iPhone and iPad. An optional subscription with a free trial unlocks all tools. What you get and how to cancel.',
    short: 'Clear Wave is free to download on iPhone and iPad. An optional in-app subscription (with a free trial) unlocks full access to all tools: water eject, stereo test, tone generator and dB meter.',
    body: '<p>Clear Wave — listed on the App Store as <em>Speaker Fix – Water Eject</em> — is a free download. Full access to all tools is available through optional in-app purchases, including a free trial and a lifetime option. Current prices are shown on the App Store in your local currency before you confirm anything.</p><h2>What\'s in the app</h2><ul class="check-list"><li>Water eject / speaker cleaner sessions</li><li>Stereo left/right test</li><li>Tone generator (swipe to change frequency)</li><li>dB sound meter</li></ul><h2>Managing a subscription</h2><p>Subscriptions are handled by Apple. To cancel, open <em>Settings → [your name] → Subscriptions</em> on your iPhone. Family Sharing is supported.</p>',
    guide: 'water-eject-app-iphone'
}
];
