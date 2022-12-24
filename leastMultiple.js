const nok = (...arr) => {
    const nod = (x, y) => (!y ? x : nod(y, x % y));
    const _nok = (x, y) => (x * y) / nod(x, y);
    return [...arr].reduce((a, b) => _nok(a, b));
}
console.log(nok(9, 12));
console.log(nok(9, 12, 56, 89));