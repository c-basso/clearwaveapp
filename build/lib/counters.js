const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..');

module.exports = {
    head: fs.readFileSync(path.join(dir, 'counters-head.html'), 'utf8').trim(),
    body: fs.readFileSync(path.join(dir, 'counters-body.html'), 'utf8').trim()
};
