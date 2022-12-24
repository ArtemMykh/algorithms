const isPirme = num => {
    const boundary = Math.floor(Math.sqrt(num));
    for (i = 2; i <= boundary; i++) if (num % i == 0) return false;
    return num >= 2;
}

console.log(isPirme(6))