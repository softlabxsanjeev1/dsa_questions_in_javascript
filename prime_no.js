// check no is prime or Not  (2,5,7)
const checkprime = (n) => {
    if (n < 2) {
        return false
    }
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false
        }
        return true
    }
}


console.log(checkprime(1))
console.log(checkprime(5))
console.log(checkprime(11))
console.log(checkprime(9))
console.log(checkprime(20))

// BIG O = O(n)