// for power of two 
// 8/2 = 4 {reminder 0 }
// 4/2 = 2 {reminder 0 }
// 2/2 = 1 {reminder 0}


const checkfunction = (n) => {
    if (n < 1) {
        return false
    }
    while (n > 1) {
        if (n % 2 !== 0) {
            return false
        }
        n = n / 2
    }
    return true
}

// complexity => (O log(n))

console.log(checkfunction(2))
console.log(checkfunction(8))
console.log(checkfunction(5))


// solution 2  have comlexity O(1)


const checkpoweroftwoBitwise = (n) => {
    if (n < 1) {
        return false
    }
    return (n & (n - 1)) === 0
}


console.log(checkpoweroftwoBitwise(3))
console.log(checkpoweroftwoBitwise(4))
console.log(checkpoweroftwoBitwise(8))