// Guides 6–10.
module.exports = [
{
    slug: 'iphone-speaker-crackling',
    navLabel: 'iPhone speaker crackling',
    keyword: 'iphone speaker crackling',
    title: 'iPhone Speaker Crackling or Distorted? How to Fix It',
    description: 'iPhone speaker crackling, buzzing or distorted? Find out if it is water, dust or a blown speaker — and fix it with a sound-wave cleaner and tone test.',
    h1: 'iPhone Speaker Crackling or Distorted? Find the Cause and Fix It',
    shot: 'tone',
    quick: 'Crackling that appears <strong>only at high volume or after getting wet</strong> is usually water or debris on the speaker membrane — run 2–3 water eject cycles, then test with a tone sweep. Crackling at <strong>every volume</strong>, or a buzz on specific notes that doesn\'t go away after drying for 24 hours, points to a damaged (blown) speaker that needs repair.',
    intro: '<p>Crackles, pops and buzzing are the sound of the speaker membrane hitting something it shouldn\'t — a droplet, a speck of grit, or its own damaged edge. The trick is figuring out which, and a test tone is the quickest way to hear it clearly.</p>',
    manual: {
        heading: 'How to fix a crackling iPhone speaker',
        steps: [
            { name: 'Rule out the source audio', text: 'Play a different, high-quality song or video. Some streams and videos crackle on their own.' },
            { name: 'Lower the volume', text: 'If crackling stops below ~70% volume, the membrane is being over-driven by something extra — usually water or debris.' },
            { name: 'Eject water and debris', text: 'Speaker down, 70–80% volume, play a low water eject tone for 30–60 seconds, 2–3 times.' },
            { name: 'Brush the grille', text: 'Use a soft, dry toothbrush to lift lint out of the holes.' },
            { name: 'Sweep test tones', text: 'Play tones from low to high. A buzz at one specific pitch that persists after cleaning suggests a damaged speaker.' }
        ]
    },
    app: {
        heading: 'Diagnose and fix crackling with Clear Wave',
        steps: [
            { name: 'Run a Water Eject session', text: 'Clear water and loosen debris first — it fixes most crackling after rain or a spill.' },
            { name: 'Open the Tone Generator', text: 'Swipe up and down slowly to sweep the frequency. Listen for the pitch where the crackle appears.' },
            { name: 'Use Stereo Test to isolate the speaker', text: 'Turn on one channel at a time. If only one side crackles, that speaker is the problem.' },
            { name: 'Repeat or book a repair', text: 'If crackling drops after each session, keep going. If nothing changes after 24 hours of drying, the speaker is likely damaged.' }
        ]
    },
    sections: [
        { h2: 'Water vs. dust vs. blown speaker', html: '<div class="table-wrap"><table><thead><tr><th>Sign</th><th>Water</th><th>Dust / debris</th><th>Blown speaker</th></tr></thead><tbody><tr><td>Started after getting wet</td><td>✔</td><td></td><td>Sometimes</td></tr><tr><td>Improves after water eject</td><td>✔</td><td>Partly</td><td>✘</td></tr><tr><td>Crackles at low volume</td><td>Rarely</td><td>Rarely</td><td>✔</td></tr><tr><td>Buzz on specific frequencies</td><td>Sometimes</td><td>✔</td><td>✔</td></tr><tr><td>Gets better after 24 h drying</td><td>✔</td><td>✘</td><td>✘</td></tr></tbody></table></div>' },
        { h2: 'Keep volume in check', html: '<p>Continuous maximum volume heats the voice coil and makes crackling worse. When testing, stay around 70–80%. If you use your iPhone as a loud music speaker every day, the <a href="/guides/decibel-meter-app-iphone/">dB meter</a> helps you keep an eye on levels.</p>' }
    ],
    faqs: [
        { q: 'Why does my iPhone speaker crackle at high volume?', a: 'Water or debris on the membrane, or the membrane reaching its limit on bass-heavy audio. Clean it first; if it still crackles only on loud bass, lower the volume or EQ.' },
        { q: 'Can water cause crackling in an iPhone speaker?', a: 'Yes. Droplets on the membrane rattle as it moves. Water eject cycles usually remove them.' },
        { q: 'Is a crackling speaker blown?', a: 'Not necessarily. If crackling persists at all volumes after cleaning and 24 hours of drying, it probably is.' }
    ],
    related: ['how-to-fix-blown-speaker', 'tone-generator-app-iphone', 'iphone-speaker-muffled'],
    faqLinks: ['can-water-eject-fix-blown-speaker', 'is-water-eject-safe', 'what-frequency-removes-water-from-speaker']
},
{
    slug: 'water-eject-shortcut',
    navLabel: 'Water eject shortcut',
    keyword: 'water eject shortcut',
    title: 'Water Eject Shortcut Not Working? The Easier Alternative',
    description: 'How the iPhone water eject Siri Shortcut works, why it stops working after iOS updates, and an easier one-tap alternative that also tests your speaker.',
    h1: 'Water Eject Shortcut for iPhone: How It Works and What to Use Instead',
    shot: 'clear',
    quick: 'The "Water Eject" Siri Shortcut is a community-made shortcut that plays a 165 Hz tone. It isn\'t made by Apple, has to be imported from a third-party site, and can break after iOS updates. A water eject app like Clear Wave does the same job with one tap, works offline and adds stereo, tone and dB tests.',
    intro: '<p>Search "water eject iPhone" and you\'ll find the famous shortcut. It\'s clever — but people regularly hit "this shortcut can\'t be opened", missing permissions, or a tone that plays too briefly. Here\'s how it works, how to fix common problems, and when an app is simply easier.</p>',
    manual: {
        heading: 'How to fix a water eject shortcut that isn\'t working',
        steps: [
            { name: 'Update iOS and the Shortcuts app', text: 'Older shortcut versions can break on new iOS releases. Get the latest version from the shortcut author.' },
            { name: 'Re-download the shortcut', text: 'Delete the old one in Shortcuts, then add it again from the author\'s page.' },
            { name: 'Allow the permissions it asks for', text: 'The first run asks to access the internet or play audio — tap Allow.' },
            { name: 'Turn off silent mode and raise volume', text: 'Some shortcut versions play through the ringer volume.' },
            { name: 'Run it 2–3 times with the speaker down', text: 'One run is often too short for heavy exposure.' }
        ]
    },
    app: {
        heading: 'The one-tap alternative: Clear Wave',
        steps: [
            { name: 'Install Clear Wave from the App Store', text: 'No shortcut import or untrusted-shortcut settings needed.' },
            { name: 'Tap to start a Water Eject session', text: 'Speaker facing down, volume ~75%.' },
            { name: 'Verify with Stereo Test', text: 'Check left and right channels — something a shortcut can\'t do.' }
        ]
    },
    sections: [
        { h2: 'Shortcut vs. app', html: '<div class="table-wrap"><table><thead><tr><th></th><th>Water Eject Shortcut</th><th>Clear Wave app</th></tr></thead><tbody><tr><td>Made by</td><td>Community author (not Apple)</td><td>Independent developer, App Store reviewed</td></tr><tr><td>Install</td><td>Import link from a third-party site</td><td>App Store</td></tr><tr><td>Breaks after iOS updates</td><td>Sometimes</td><td>Updated through the App Store</td></tr><tr><td>Session progress</td><td>No</td><td>Yes</td></tr><tr><td>Stereo, tone and dB tests</td><td>No</td><td>Yes</td></tr><tr><td>Price</td><td>Free</td><td>Free download, optional Pro</td></tr></tbody></table></div>' },
        { h2: 'Does the iPhone have its own water eject?', html: '<p>No. Apple Watch has Water Lock, which plays a tone to clear its speaker, but the iPhone has no built-in equivalent. That\'s why the shortcut and apps exist. Details: <a href="/faq/does-iphone-have-built-in-water-eject/">Does the iPhone have a built-in water eject?</a></p>' }
    ],
    faqs: [
        { q: 'Is the water eject shortcut made by Apple?', a: 'No. It\'s a community shortcut shared on sites like RoutineHub. Apple\'s built-in water eject exists only on Apple Watch (Water Lock).' },
        { q: 'Why does my water eject shortcut say it can\'t be opened?', a: 'Usually because it was built for an older iOS version or the link expired. Re-download the latest version, or use an app instead.' },
        { q: 'What frequency does the water eject shortcut use?', a: 'The popular versions play a tone around 165 Hz.' }
    ],
    related: ['water-eject-app-iphone', '165-hz-water-eject-sound', 'get-water-out-of-iphone-speaker'],
    faqLinks: ['does-iphone-have-built-in-water-eject', 'what-frequency-removes-water-from-speaker', 'does-water-eject-work']
},
{
    slug: '165-hz-water-eject-sound',
    navLabel: '165 Hz water eject sound',
    keyword: '165 hz sound',
    title: '165 Hz Sound: The Water Eject Frequency Explained',
    description: 'Why 165 Hz is the go-to water eject frequency, how low tones push water out of a phone speaker, and how to play it safely on iPhone.',
    h1: '165 Hz Sound: Why This Frequency Ejects Water From Speakers',
    shot: 'tone',
    quick: '165 Hz is a low tone that makes a small phone speaker\'s membrane move in <strong>long, strong strokes</strong> while staying within what the speaker can reproduce. Those strokes push droplets out of the grille. Play it at 70–80% volume with the speaker facing down for 30–60 seconds, 2–3 times.',
    intro: '<p>Every water eject tool — the Siri shortcut, the websites, the apps — uses a low tone, and 165 Hz is the number you\'ll see most. It\'s not magic, it\'s a practical sweet spot between "low enough to move a lot of air" and "high enough for a tiny speaker to actually play".</p>',
    manual: {
        heading: 'How to play a 165 Hz water eject tone safely',
        steps: [
            { name: 'Take the case off', text: 'Let the grille breathe and the water escape.' },
            { name: 'Face the speaker down', text: 'Gravity does half the work.' },
            { name: 'Set volume to 70–80%', text: 'Enough movement to push water; no need for maximum.' },
            { name: 'Play 165 Hz for 30–60 seconds', text: 'Use a tone generator or water eject app.' },
            { name: 'Repeat and wipe', text: '2–3 cycles, wiping droplets in between.' }
        ]
    },
    app: {
        heading: 'Play water eject tones in Clear Wave',
        steps: [
            { name: 'Run the Water Eject session', text: 'Clear Wave\'s session uses tuned low-frequency sound patterns — no need to set a number yourself.' },
            { name: 'Or dial in a tone manually', text: 'Open the Tone Generator and swipe up/down to set a specific frequency, like 165 Hz.' },
            { name: 'Test after cleaning', text: 'Sweep through higher frequencies to confirm the speaker sounds clean across the range.' }
        ]
    },
    sections: [
        { h2: 'Why low frequencies move water', html: '<p>At a fixed volume, lower frequencies require the speaker membrane to travel <em>further</em> on each cycle. High-pitched tones barely move it. A long stroke acts like a piston pushing air — and any water sitting in the mesh — out through the grille. Go too low, though (below roughly 100 Hz), and a phone-sized speaker can\'t reproduce the tone well, so the effect drops. That\'s why the 150–200 Hz range, and 165 Hz in particular, is popular.</p>' },
        { h2: 'Is 165 Hz safe for my speaker?', html: '<p>Yes, at sensible volume. It\'s an ordinary audio tone — lower than most music bass lines. Avoid running any tone at 100% volume for minutes on end, and stop if you hear harsh rattling.</p>' }
    ],
    faqs: [
        { q: 'Is 165 Hz the best frequency to remove water?', a: 'It\'s a good, widely used choice. Anything around 150–200 Hz works similarly on phone speakers. Sessions that vary the tone can help shake loose stubborn drops.' },
        { q: 'Can I hear 165 Hz?', a: 'Yes. It\'s a clearly audible low hum, roughly the E below middle C.' },
        { q: 'How long should I play the 165 Hz sound?', a: '30–60 seconds per cycle, 2–3 cycles. Heavy exposure may need up to 5.' }
    ],
    related: ['tone-generator-app-iphone', 'water-eject-shortcut', 'water-eject-app-iphone'],
    faqLinks: ['what-frequency-removes-water-from-speaker', 'is-water-eject-safe', 'how-many-times-run-water-eject']
},
{
    slug: 'how-to-fix-blown-speaker',
    navLabel: 'How to fix a blown speaker',
    keyword: 'how to fix a blown speaker',
    title: 'How to Fix a Blown Speaker (and Tell If It\'s Really Blown)',
    description: 'Is your phone speaker blown or just clogged? Test it in 2 minutes, try the fixes that work, and know when a blown speaker needs repair.',
    h1: 'How to Fix a Blown Speaker — and Check If It\'s Really Blown',
    shot: 'test',
    quick: 'First, check it isn\'t just water or dust: run 2–3 water eject cycles, brush the grille, and test again. A truly <strong>blown</strong> speaker (torn membrane or damaged voice coil) crackles or buzzes at every volume and can\'t be fixed with software — it needs a speaker replacement. Many "blown" phone speakers turn out to be clogged.',
    intro: '<p>"Blown" means the speaker is physically damaged — usually from being driven too hard, a drop, or corrosion. But water and debris produce almost the same symptoms. Before you pay for a repair, spend two minutes ruling those out.</p>',
    manual: {
        heading: 'How to test and fix a "blown" speaker',
        steps: [
            { name: 'Play clean audio at 50% volume', text: 'If it sounds fine at 50% and only distorts when loud, it\'s probably not blown.' },
            { name: 'Eject water and debris', text: 'Speaker down, 70–80% volume, low-frequency water eject tone for 30–60 seconds, 2–3 times.' },
            { name: 'Brush the grille', text: 'Soft, dry toothbrush — never pins or needles.' },
            { name: 'Sweep test tones', text: 'Play tones from low to high. A blown speaker buzzes across many frequencies, not just one.' },
            { name: 'Compare speakers', text: 'Use a left/right test. If one side is clean and the other rattles at every level, that speaker is damaged.' },
            { name: 'Replace if confirmed', text: 'A phone speaker replacement is a routine repair at Apple or a reputable shop.' }
        ]
    },
    app: {
        heading: 'Diagnose a blown speaker with Clear Wave',
        steps: [
            { name: 'Clean first', text: 'Run a Water Eject session to rule out water and dust.' },
            { name: 'Stereo Test', text: 'Play Left and Right channels separately and compare.' },
            { name: 'Tone Generator sweep', text: 'Swipe slowly from low to high frequency and note where it buzzes.' },
            { name: 'dB Meter', text: 'Compare loudness between speakers — a big drop on one side confirms a problem.' }
        ]
    },
    sections: [
        { h2: 'Signs your speaker is blown', html: '<ul class="check-list"><li>Crackling or fuzz at low volume, not just loud volume.</li><li>A constant rattle on bass notes that doesn\'t improve after drying for 24 hours.</li><li>No sound at all from one speaker while the other works.</li><li>Problems started right after a hard drop.</li></ul>' },
        { h2: 'Myths about fixing blown speakers', html: '<p><strong>"A special frequency can fix a blown speaker."</strong> No. Tones can move water and dust, but they can\'t repair a torn cone or burnt coil. <strong>"Glue or tape can fix it."</strong> Not on a phone — speakers are sealed modules. If yours is truly blown, replacement is the fix.</p>' }
    ],
    faqs: [
        { q: 'Can a blown phone speaker fix itself?', a: 'No. But a speaker that sounds blown because of water often recovers once it dries or after water eject cycles.' },
        { q: 'How much does it cost to fix a blown iPhone speaker?', a: 'It depends on the model and where you repair it. Check Apple\'s repair pricing page or a local repair shop; AppleCare+ may cover it.' },
        { q: 'Can Clear Wave fix a blown speaker?', a: 'No app can repair physical damage. Clear Wave helps you rule out water and dust and diagnose which speaker is damaged.' }
    ],
    related: ['iphone-speaker-crackling', 'left-right-speaker-test', 'fix-my-speaker'],
    faqLinks: ['can-water-eject-fix-blown-speaker', 'does-water-eject-work', 'is-water-eject-safe']
},
{
    slug: 'clean-iphone-speaker-dust',
    navLabel: 'Clean iPhone speaker dust',
    keyword: 'how to clean iphone speaker',
    title: 'How to Clean iPhone Speaker Grills (Dust & Lint) Safely',
    description: 'Clean dust and lint from your iPhone speaker without damage: soft brush, tape trick, and a sound-wave speaker cleaner. What to never use.',
    h1: 'How to Clean Your iPhone Speaker (Dust, Lint and Grime)',
    shot: 'clear',
    quick: 'Power off, then gently brush the speaker grilles with a <strong>soft, dry toothbrush</strong> at an angle. Lift remaining lint with a piece of painter\'s tape or Blu Tack pressed lightly on the grille. Turn the phone on and run a speaker cleaner session (low-frequency sound) to shake loose what\'s left. Never use pins, liquids or compressed air.',
    intro: '<p>Pocket lint, dust and makeup slowly pack into the tiny speaker holes. Because it happens gradually, most people just think their iPhone got quieter with age. A careful clean often brings back a surprising amount of volume and clarity.</p>',
    manual: {
        heading: 'How to clean an iPhone speaker step by step',
        steps: [
            { name: 'Turn the iPhone off and remove the case', text: 'Safer, and you can see the grille clearly.' },
            { name: 'Brush the grille', text: 'Use a soft, dry, clean toothbrush. Brush at an angle, away from the holes, not into them.' },
            { name: 'Lift lint with tape', text: 'Press painter\'s tape or Blu Tack gently on the grille and peel it off. Don\'t push it into the holes.' },
            { name: 'Clean the earpiece', text: 'Repeat gently on the top earpiece slot.' },
            { name: 'Run a sound cleaning session', text: 'Turn the phone on, face the speaker down and play a low-frequency cleaning tone to vibrate out loose particles.' }
        ]
    },
    app: {
        heading: 'Finish the job with Clear Wave\'s Speaker Cleaner',
        steps: [
            { name: 'Start the Speaker Cleaner session', text: 'The same session that ejects water also loosens dust from the membrane and mesh.' },
            { name: 'Use vibration mode', text: 'The session\'s vibration option helps shake particles out of the grille.' },
            { name: 'Measure the difference', text: 'Use the dB Meter before and after cleaning (same song, same volume, same distance) to see the improvement.' }
        ]
    },
    sections: [
        { h2: 'Never use these on your speaker', html: '<ul class="check-list check-list--no"><li>Pins, needles or toothpicks — they can puncture the mesh.</li><li>Alcohol, water or cleaning sprays in the holes.</li><li>Compressed air — it can push debris further in.</li><li>A vacuum held tight against the grille.</li></ul>' },
        { h2: 'How often to clean', html: '<p>Every few months is plenty for most people. If you keep your phone in a pocket with lint, at the beach, or in a dusty workplace, a quick brush and sound-cleaning session once a month keeps volume consistent.</p>' }
    ],
    faqs: [
        { q: 'Can I use a toothbrush to clean my iPhone speaker?', a: 'Yes — a soft, clean, dry one. Brush gently at an angle.' },
        { q: 'Does a speaker cleaner app remove dust?', a: 'It helps loosen fine dust from the membrane and mesh. Combine it with a soft brush for packed lint.' },
        { q: 'Why is my iPhone speaker quiet even after cleaning?', a: 'Check Bluetooth routing and volume settings, then run a stereo test. If one speaker is much quieter, it may need repair.' }
    ],
    related: ['fix-my-speaker', 'iphone-speaker-muffled', 'decibel-meter-app-iphone'],
    faqLinks: ['does-water-eject-work', 'is-water-eject-safe', 'is-clear-wave-free']
}
];
