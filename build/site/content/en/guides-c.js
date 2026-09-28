// Guides 11–14.
module.exports = [
{
    slug: 'iphone-dropped-in-water',
    navLabel: 'iPhone dropped in water',
    keyword: 'iphone dropped in water what to do',
    title: 'iPhone Dropped in Water? What to Do in the First 30 Minutes',
    description: 'Dropped your iPhone in water, the pool or the toilet? Do this right now: Apple-safe drying, liquid-detected alert, speaker water eject and when to charge.',
    h1: 'iPhone Dropped in Water? Do This in the First 30 Minutes',
    shot: 'clear',
    quick: 'Take it out, wipe it, and <strong>don\'t charge it</strong>. Tap it gently against your palm with the connector facing down, leave it in a dry spot with airflow, and wait at least 30 minutes before charging (up to 24 hours if you see a liquid alert). To clear muffled sound, run a water eject tone with the speaker facing down. <strong>No rice, no hair dryer.</strong>',
    intro: '<p>Modern iPhones are water-resistant (IP67 or IP68 depending on the model), so a quick dunk is usually survivable. But water resistance isn\'t waterproof, it wears down over time, and liquid damage isn\'t covered by Apple\'s standard warranty. What you do in the next half hour matters.</p>',
    manual: {
        heading: 'What to do right now',
        steps: [
            { name: 'Get it out and power down if it acts strangely', text: 'If the screen flickers or the phone behaves oddly, turn it off.' },
            { name: 'Remove the case and SIM tray only if it\'s wet inside', text: 'Wipe everything with a soft, lint-free cloth.' },
            { name: 'Rinse if it wasn\'t fresh water', text: 'Apple\'s guidance for splash-resistant iPhones: if exposed to anything other than water (salt water, soda, chlorinated pool water), rinse the affected area with tap water, then wipe and dry.' },
            { name: 'Tap out the connector', text: 'Tap the iPhone gently against your hand with the charging port facing down.' },
            { name: 'Clear the speakers with sound', text: 'Speaker down, 70–80% volume, water eject tone for 30–60 seconds, 2–3 times.' },
            { name: 'Air-dry before charging', text: 'Leave it in a dry area with airflow. Wait at least 30 minutes; if a liquid-detected alert appears, wait until it clears (up to 24 hours).' }
        ]
    },
    app: {
        heading: 'Get your sound back with Clear Wave',
        steps: [
            { name: 'Run a Water Eject session', text: 'Bottom speaker facing down first.' },
            { name: 'Flip for the earpiece', text: 'Run another session with the top of the phone facing down.' },
            { name: 'Check both channels', text: 'Use Stereo Test to confirm left and right sound equally clear.' },
            { name: 'Repeat after drying', text: 'After an hour, run one more session — water can migrate back to the grille.' }
        ]
    },
    sections: [
        { h2: '"Liquid Detected in Lightning / USB-C Connector"', html: '<p>iPhone XS, iPhone XR and later can warn you when there\'s liquid in the charging port. When you see it, unplug the cable, tap out the water, and let the phone dry. Don\'t use the "Emergency Override" to charge unless it\'s an emergency. Apple notes that you can still charge with a wireless charger while the port dries.</p>' },
        { h2: 'What not to do', html: '<ul class="check-list check-list--no"><li><strong>Rice</strong> — Apple says don\'t: rice dust and particles can get into the phone.</li><li><strong>Hair dryer, oven, radiator</strong> — heat harms the battery and seals.</li><li><strong>Cotton swabs or paper towels in the port</strong>.</li><li><strong>Charging while wet</strong>.</li></ul>' }
    ],
    faqs: [
        { q: 'How long should I wait to charge an iPhone after it gets wet?', a: 'Apple recommends waiting at least 30 minutes, and up to 24 hours if the liquid-detected alert keeps appearing.' },
        { q: 'Is my iPhone waterproof?', a: 'No iPhone is waterproof. iPhone 7 and later are water-resistant (IP67 or IP68). Resistance decreases with age and wear.' },
        { q: 'My iPhone fell in the toilet — what should I do?', a: 'Take it out, rinse the outside briefly with clean tap water, dry it, run water eject cycles for the speaker, and let it air-dry before charging.' }
    ],
    related: ['get-water-out-of-iphone-speaker', 'iphone-speaker-muffled', 'water-eject-app-iphone'],
    faqLinks: ['should-i-put-wet-iphone-in-rice', 'how-long-for-water-to-leave-iphone-speaker', 'is-water-eject-safe']
},
{
    slug: 'left-right-speaker-test',
    navLabel: 'Left & right speaker test',
    keyword: 'left right speaker test',
    title: 'Left Right Speaker Test for iPhone & Headphones',
    description: 'Run a left and right speaker test on iPhone, AirPods or headphones in seconds. Find a quiet, muffled or dead channel and what to do about it.',
    h1: 'Left and Right Speaker Test: Check Both Channels in Seconds',
    shot: 'test',
    quick: 'A left/right (stereo) test plays sound through <strong>one channel at a time</strong> so you can hear if either speaker is quiet, muffled or silent. On iPhone the earpiece and bottom speaker are the two channels. If one side sounds worse after getting wet, run a water eject session on that speaker and test again.',
    intro: '<p>With both speakers playing, a problem on one side is easy to miss. Splitting the channels makes it obvious — and tells you exactly which speaker to clean, dry or repair. It works for headphones, AirPods and Bluetooth speakers too.</p>',
    manual: {
        heading: 'How to run a left/right speaker test',
        steps: [
            { name: 'Turn off Mono Audio', text: 'Settings → Accessibility → Audio & Visual → Mono Audio must be off, or both channels play the same sound.' },
            { name: 'Check the balance slider', text: 'In the same menu, make sure Balance is centered between L and R.' },
            { name: 'Play the left channel only', text: 'Use a stereo test that plays sound in one channel. Listen: which speaker plays, and does it sound clean?' },
            { name: 'Play the right channel only', text: 'Compare loudness and clarity with the left.' },
            { name: 'Fix the weaker side', text: 'Muffled = water or dust (clean it). Silent or crackling = possible hardware issue.' }
        ]
    },
    app: {
        heading: 'Stereo test in Clear Wave',
        steps: [
            { name: 'Open Stereo Test', text: 'You\'ll see a Left channel and a Right channel control.' },
            { name: 'Tap On for Left', text: 'Listen for the sound on the left side only.' },
            { name: 'Tap On for Right', text: 'Compare with the left side.' },
            { name: 'Clean the weak side', text: 'Run a Water Eject session with that speaker facing down, then test again.' }
        ]
    },
    sections: [
        { h2: 'Which iPhone speaker is left and which is right?', html: '<p>In portrait, iOS routes stereo between the <strong>bottom speaker</strong> and the <strong>top earpiece</strong>. When you rotate to landscape, iOS flips the channels so left and right match the direction you\'re holding the phone. Test in the orientation you usually watch videos in.</p>' },
        { h2: 'Testing AirPods and headphones', html: '<p>Connect your headphones and run the same test. If one AirPod is quieter, clean its mesh gently with a dry soft brush and check Balance in Accessibility settings. Water in sealed earbuds may need time to dry — see <a href="/faq/does-water-eject-work-on-airpods/">Does water eject work on AirPods?</a></p>' }
    ],
    faqs: [
        { q: 'Why does my iPhone play sound from only one speaker?', a: 'Check that Mono Audio is off and Balance is centered. Then run a stereo test; if one side is muffled, it may have water or dust in it.' },
        { q: 'Can I test AirPods left and right?', a: 'Yes. Connect them and run a stereo test — each earbud should play only its own channel.' },
        { q: 'Why is my earpiece quieter than the bottom speaker?', a: 'It\'s smaller and tuned for calls, so it\'s slightly quieter by design. A big difference, or muffled sound, points to lint or water in the earpiece grille.' }
    ],
    related: ['how-to-fix-iphone-speaker', 'how-to-fix-blown-speaker', 'decibel-meter-app-iphone'],
    faqLinks: ['does-water-eject-work-on-airpods', 'can-water-eject-fix-blown-speaker', 'is-clear-wave-free']
},
{
    slug: 'decibel-meter-app-iphone',
    navLabel: 'Decibel meter app for iPhone',
    keyword: 'decibel meter app iphone',
    title: 'Decibel Meter App for iPhone: Measure Sound Levels (dB)',
    description: 'Use your iPhone as a decibel meter: measure noise in dB, check how loud your speaker is, and know safe listening levels. Free dB meter in Clear Wave.',
    h1: 'Decibel Meter App for iPhone: Measure Noise and Speaker Loudness',
    shot: 'meter',
    quick: 'A decibel (dB) meter app uses the iPhone microphone to estimate how loud a sound is. Use it to compare your speaker before and after cleaning, check room noise, or stay under the ~85 dB level where long exposure can harm hearing. Phone meters are approximate — great for comparisons, not certified measurements.',
    intro: '<p>A dB meter turns "it sounds quieter" into a number. That\'s useful after water or dust cleaning, when you want proof the speaker is back to normal — and handy for everyday questions like "how loud is this bar?" or "is my kid\'s tablet too loud?".</p>',
    manual: {
        heading: 'How to measure speaker loudness with a dB meter',
        steps: [
            { name: 'Pick a reference sound', text: 'The same song or test tone at the same volume every time.' },
            { name: 'Fix the distance', text: 'Hold a second device with the meter at the same distance (e.g. 30 cm) from the speaker, or measure the room with the phone itself.' },
            { name: 'Measure in a quiet room', text: 'Background noise skews readings.' },
            { name: 'Record the average', text: 'Watch the reading for 10–15 seconds and note the typical value.' },
            { name: 'Compare before vs. after', text: 'After cleaning, measure again with identical settings.' }
        ]
    },
    app: {
        heading: 'Use the dB Meter in Clear Wave',
        steps: [
            { name: 'Open DB Meter', text: 'Allow microphone access when asked — the meter needs it to listen.' },
            { name: 'Start monitoring', text: 'The gauge shows the current level in dB with a plain-language label such as "Normal conversation".' },
            { name: 'Stop monitoring', text: 'Tap Stop Monitoring when done. Readings are processed on your device.' }
        ]
    },
    sections: [
        { h2: 'Common sound levels', html: '<div class="table-wrap"><table><thead><tr><th>Sound</th><th>Approx. level</th></tr></thead><tbody><tr><td>Quiet room / whisper</td><td>30 dB</td></tr><tr><td>Normal conversation</td><td>50–60 dB</td></tr><tr><td>Busy street, vacuum cleaner</td><td>70–80 dB</td></tr><tr><td>Level where long exposure risks hearing (8 h)</td><td>85 dB</td></tr><tr><td>Concert, club</td><td>100–110 dB</td></tr></tbody></table></div><p>Every +10 dB sounds roughly twice as loud.</p>' },
        { h2: 'How accurate is an iPhone dB meter?', html: '<p>iPhone microphones are good but not laboratory-calibrated, and they\'re tuned for voice. Expect readings within a few dB for everyday sounds — ideal for before/after comparisons with the same phone. For legal or workplace compliance, use a certified sound level meter.</p>' }
    ],
    faqs: [
        { q: 'Can an iPhone measure decibels?', a: 'Yes, with a dB meter app using the microphone. Apple Watch and the Health app also track environmental noise levels.' },
        { q: 'What is a safe decibel level?', a: 'Sustained exposure above about 85 dB for hours can damage hearing. Short exposure to louder sounds is less risky.' },
        { q: 'Does the dB meter record audio?', a: 'Clear Wave\'s meter listens to measure loudness on your device. App Store privacy details list no data linked to your identity.' }
    ],
    related: ['clean-iphone-speaker-dust', 'left-right-speaker-test', 'tone-generator-app-iphone'],
    faqLinks: ['is-clear-wave-free', 'does-water-eject-work', 'is-water-eject-safe']
},
{
    slug: 'tone-generator-app-iphone',
    navLabel: 'Tone generator app for iPhone',
    keyword: 'tone generator app',
    title: 'Tone Generator App for iPhone: Play Any Frequency (Hz)',
    description: 'Play any test tone on iPhone: pick a frequency in Hz, sweep low to high to test speakers, find rattles, or play a 165 Hz water eject tone.',
    h1: 'Tone Generator App for iPhone: Test Speakers With Any Frequency',
    shot: 'tone',
    quick: 'A tone generator plays a pure sine wave at the frequency you choose. <strong>Sweep slowly from low to high</strong> to hear where a speaker rattles, buzzes or goes quiet — a fast way to check a phone speaker after water exposure. You can also dial in a low tone (≈165 Hz) to help push water out.',
    intro: '<p>Music hides problems; a single clean tone exposes them. That\'s why audio technicians use tone generators — and why it\'s one of the best tools for checking whether your iPhone speaker is fully clear after water eject.</p>',
    manual: {
        heading: 'How to test a speaker with a tone generator',
        steps: [
            { name: 'Set volume to 50–70%', text: 'Loud enough to hear defects, not so loud that everything distorts.' },
            { name: 'Start low', text: 'Begin around 100–200 Hz. Small phone speakers roll off in the deep bass, so very low tones will sound faint — that\'s normal.' },
            { name: 'Sweep slowly upward', text: 'Move through the midrange (500–4,000 Hz) where voices live. Listen for buzzing or rattling.' },
            { name: 'Check the highs', text: 'Continue up to 10,000 Hz+ at low volume. Missing highs can mean water or dust on the mesh.' },
            { name: 'Note problem frequencies', text: 'A rattle at one pitch suggests debris; buzzing everywhere suggests damage.' }
        ]
    },
    app: {
        heading: 'Use the Tone Generator in Clear Wave',
        steps: [
            { name: 'Open Tone Generator', text: 'The current frequency shows in the middle of the screen (e.g. 1028 Hz).' },
            { name: 'Swipe up or down', text: 'Swipe to raise or lower the frequency and sweep the range.' },
            { name: 'Stop Tone when done', text: 'If you hear rattling, run a Water Eject session and sweep again.' }
        ]
    },
    sections: [
        { h2: 'Useful test frequencies', html: '<div class="table-wrap"><table><thead><tr><th>Frequency</th><th>Use</th></tr></thead><tbody><tr><td>~165 Hz</td><td>Water eject tone for phone speakers</td></tr><tr><td>440 Hz</td><td>Tuning reference (A4)</td></tr><tr><td>1,000 Hz</td><td>Standard audio test tone</td></tr><tr><td>2,000–4,000 Hz</td><td>Speech clarity range — muffled sound shows up here</td></tr><tr><td>10,000 Hz+</td><td>High-frequency check; hearing sensitivity fades with age</td></tr></tbody></table></div>' },
        { h2: 'Protect your hearing', html: '<p>Pure tones sound louder and more fatiguing than music. Keep volume moderate, don\'t hold the speaker to your ear, and take breaks.</p>' }
    ],
    faqs: [
        { q: 'What is a tone generator used for?', a: 'Testing speakers and headphones, finding rattles, checking hearing range, tuning instruments, and playing low tones to help eject water from phone speakers.' },
        { q: 'Can my iPhone play very low frequencies?', a: 'It can play them, but small phone speakers reproduce deep bass poorly, so tones below roughly 150 Hz sound faint.' },
        { q: 'Is the tone generator in Clear Wave free?', a: 'Clear Wave is free to download. Some advanced tools are part of the optional subscription, which includes a free trial.' }
    ],
    related: ['165-hz-water-eject-sound', 'iphone-speaker-crackling', 'decibel-meter-app-iphone'],
    faqLinks: ['what-frequency-removes-water-from-speaker', 'is-clear-wave-free', 'is-water-eject-safe']
}
];
