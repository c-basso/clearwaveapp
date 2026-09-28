const APPLE_WET = { name: 'Soporte de Apple: si aparece una alerta de detección de líquido en el iPhone', url: 'https://support.apple.com/es-mx/102643' };
const APPLE_IP = { name: 'Soporte de Apple: resistencia a salpicaduras, agua y polvo del iPhone 7 y posteriores', url: 'https://support.apple.com/es-mx/108039' };
const SOURCES = {
    'get-water-out-of-iphone-speaker': [APPLE_WET],
    'iphone-dropped-in-water': [APPLE_WET, APPLE_IP],
    'how-to-fix-iphone-speaker': [APPLE_IP]
};
module.exports = [...require('./guides-a'), ...require('./guides-b'), ...require('./guides-c')]
    .map((g) => ({ ...g, sources: g.sources || SOURCES[g.id] || [] }));
