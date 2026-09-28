const APPLE_WET = { name: 'Apple Support – If you see a liquid-detection alert on your iPhone', url: 'https://support.apple.com/en-us/102643' };
const APPLE_IP = { name: 'Apple Support – Splash, water, and dust resistance of iPhone 7 and later', url: 'https://support.apple.com/en-us/108039' };
const SOURCES = {
    'get-water-out-of-iphone-speaker': [APPLE_WET],
    'iphone-dropped-in-water': [APPLE_WET, APPLE_IP],
    'how-to-fix-iphone-speaker': [APPLE_IP]
};
module.exports = [...require('./guides-a'), ...require('./guides-b'), ...require('./guides-c')]
    .map((g) => ({ ...g, sources: g.sources || SOURCES[g.slug] || [] }));
