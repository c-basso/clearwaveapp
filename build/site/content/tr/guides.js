const APPLE_WET = { name: 'Apple Destek: iPhone’unuzda sıvı algılama uyarısı görürseniz', url: 'https://support.apple.com/tr-tr/102643' };
const APPLE_IP = { name: 'Apple Destek: iPhone 7 ve sonraki modellerde sıçramaya, suya ve toza dayanıklılık', url: 'https://support.apple.com/tr-tr/108039' };
const SOURCES = {
    'get-water-out-of-iphone-speaker': [APPLE_WET],
    'iphone-dropped-in-water': [APPLE_WET, APPLE_IP],
    'how-to-fix-iphone-speaker': [APPLE_IP]
};
module.exports = [...require('./guides-a'), ...require('./guides-b'), ...require('./guides-c')]
    .map((g) => ({ ...g, sources: g.sources || SOURCES[g.id] || [] }));
