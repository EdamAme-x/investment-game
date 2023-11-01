function RandomShift(number) {
    const first = number;
    number = parseInt(number.toString().slice(-5))
    number ^= 4 << number;
    number ^= number >> 8;
    return Math.floor(Math.sqrt(2 << number) - first);
}
