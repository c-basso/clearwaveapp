const APPLE_WET = { name: 'Apple सहायता: अगर iPhone पर तरल पहचान का अलर्ट दिखे', url: 'https://support.apple.com/hi-in/102643' };
const APPLE_IP = { name: 'Apple सहायता: iPhone 7 और उसके बाद के मॉडल में छींटों, पानी और धूल से बचाव', url: 'https://support.apple.com/hi-in/108039' };
const SOURCES = {
    'get-water-out-of-iphone-speaker': [APPLE_WET],
    'iphone-dropped-in-water': [APPLE_WET, APPLE_IP],
    'how-to-fix-iphone-speaker': [APPLE_IP]
};
module.exports = [...require('./guides-a'), ...require('./guides-b'), ...require('./guides-c')]
    .map((g) => ({ ...g, sources: g.sources || SOURCES[g.id] || [] }));
