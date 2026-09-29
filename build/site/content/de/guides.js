const APPLE_WET = { name: 'Apple Support: Wenn auf dem iPhone ein Hinweis auf Flüssigkeit erscheint', url: 'https://support.apple.com/de-de/102643' };
const APPLE_IP = { name: 'Apple Support: Spritz-, Wasser- und Staubschutz beim iPhone 7 und neuer', url: 'https://support.apple.com/de-de/108039' };
const SOURCES = {
    'get-water-out-of-iphone-speaker': [APPLE_WET],
    'iphone-dropped-in-water': [APPLE_WET, APPLE_IP],
    'how-to-fix-iphone-speaker': [APPLE_IP]
};
module.exports = [...require('./guides-a'), ...require('./guides-b'), ...require('./guides-c')]
    .map((g) => ({ ...g, sources: g.sources || SOURCES[g.id] || [] }));
