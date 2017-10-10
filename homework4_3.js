const pow = function (base, n) {
    if (n === 1) {
        return base;
    }
    return base * pow (base, n-1)
}
console.log (pow(2, 10))
