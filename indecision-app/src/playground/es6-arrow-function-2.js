const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map(number => number * this.multiplyBy)
    }
}


console.log(multiplier.multiply())
console.log('7a!')