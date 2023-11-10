// 5! = 5*4*3*2*1


// logic 1
const factorial = (n) => {
    let fact = 1
    for (let i = 0; i < n; i++) {
        fact = fact * (n - i);
    }
    return fact
}

console.log(`Factorial = ${factorial(5)}`)
console.log(`Factorial = ${factorial(7)}`)
console.log(`Factorial = ${factorial(8)}`)


// logic 2
//