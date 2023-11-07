// example = [0,1,1,2,3,5,8] thier no is the sum of previous two position numbers

const fibonacci = (n) => {
    const fib = [0, 1]
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib
}


console.log(`Series = ${fibonacci(5)}`)
console.log(`Series = ${fibonacci(8)}`)
console.log(`Series = ${fibonacci(9)}`)