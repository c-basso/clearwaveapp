/**
 * Compare two Search Console snapshots made by build/gsc-report.js.
 *
 * Usage:
 *   node build/gsc-report.js --start=2026-09-07 --end=2026-09-20 --out=gsc/before
 *   node build/gsc-report.js --start=2026-10-05 --end=2026-10-18 --out=gsc/after
 *   node build/gsc-compare.js gsc/before gsc/after [report=queries|pages|countries] [top=30]
 *
 * Prints totals and the biggest impression winners/losers with position change.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const [a, b, report = 'queries', top = '30'] = process.argv.slice(2);
if (!a || !b) {
    console.error('Usage: node build/gsc-compare.js <dirA> <dirB> [queries|pages|countries] [top]');
    process.exit(1);
}

function parseCsvLine(line) {
    const out = [];
    let cur = '';
    let q = false;
    for (let i = 0; i < line.length; i++) {
        const c = line[i];
        if (q) {
            if (c === '"' && line[i + 1] === '"') (cur += '"'), i++;
            else if (c === '"') q = false;
            else cur += c;
        } else if (c === '"') q = true;
        else if (c === ',') out.push(cur), (cur = '');
        else cur += c;
    }
    out.push(cur);
    return out;
}

function load(dir) {
    const file = path.join(ROOT, dir, `${report}.csv`);
    const [, ...lines] = fs.readFileSync(file, 'utf8').trim().split('\n');
    const map = new Map();
    for (const l of lines) {
        const [key, clicks, impr, , pos] = parseCsvLine(l);
        map.set(key, { clicks: +clicks, impr: +impr, pos: +pos });
    }
    const meta = JSON.parse(fs.readFileSync(path.join(ROOT, dir, 'meta.json'), 'utf8'));
    return { map, meta };
}

const A = load(a);
const B = load(b);
const sum = (m, k) => [...m.values()].reduce((s, r) => s + r[k], 0);
const fmtPos = (p) => (p ? p.toFixed(1) : '—');

console.log(`A: ${A.meta.startDate} → ${A.meta.endDate}   B: ${B.meta.startDate} → ${B.meta.endDate}   (${report})`);
for (const k of ['clicks', 'impr']) {
    const x = sum(A.map, k);
    const y = sum(B.map, k);
    const pct = x ? ` (${y >= x ? '+' : ''}${Math.round(((y - x) / x) * 100)}%)` : '';
    console.log(`  ${k.padEnd(6)} ${x} → ${y}${pct}`);
}

const keys = new Set([...A.map.keys(), ...B.map.keys()]);
const rows = [...keys].map((key) => {
    const x = A.map.get(key) || { clicks: 0, impr: 0, pos: 0 };
    const y = B.map.get(key) || { clicks: 0, impr: 0, pos: 0 };
    return { key, x, y, d: y.impr - x.impr };
});

function print(title, list) {
    console.log(`\n${title}`);
    console.log('  Δimpr  impr A→B     clicks A→B   pos A→B        key');
    for (const r of list) {
        console.log(
            `  ${String(r.d > 0 ? '+' + r.d : r.d).padStart(5)}  ${`${r.x.impr}→${r.y.impr}`.padEnd(12)} ${`${r.x.clicks}→${r.y.clicks}`.padEnd(12)} ${`${fmtPos(r.x.pos)}→${fmtPos(r.y.pos)}`.padEnd(14)} ${r.key}`
        );
    }
}
const n = Number(top);
print('▲ Winners', rows.filter((r) => r.d > 0).sort((p, q) => q.d - p.d).slice(0, n));
print('▼ Losers', rows.filter((r) => r.d < 0).sort((p, q) => p.d - q.d).slice(0, n));
