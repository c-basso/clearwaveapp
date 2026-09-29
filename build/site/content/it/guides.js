const APPLE_WET = { name: 'Supporto Apple: se viene visualizzato un avviso di rilevamento di liquidi sull’iPhone', url: 'https://support.apple.com/it-it/102643' };
const APPLE_IP = { name: 'Supporto Apple: resistenza a schizzi, acqua e polvere di iPhone 7 e modelli successivi', url: 'https://support.apple.com/it-it/108039' };
const SOURCES = {
    'get-water-out-of-iphone-speaker': [APPLE_WET],
    'iphone-dropped-in-water': [APPLE_WET, APPLE_IP],
    'how-to-fix-iphone-speaker': [APPLE_IP]
};
module.exports = [...require('./guides-a'), ...require('./guides-b'), ...require('./guides-c')]
    .map((g) => ({ ...g, sources: g.sources || SOURCES[g.id] || [] }));
