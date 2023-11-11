// set => like arrays but do not contain duplicate elements
// donot maintain the order of insertion add element at its right order

const arr = [2, 5, 7, 8]
const set = new Set(arr)
// add 

set.add(9)
for (const item of set) {
    console.log(item)
}
console.log(set.has(5))
console.log(`Size of set = ${set.size}`)
console.log("---------------")
// delete 

set.delete(5)
for (const item of set) {
    console.log(item)
}
console.log(set.has(5))
console.log(`Size of set = ${set.size}`)
console.log("---------------")

// to remove all eles of set 
set.clear()
console.log(`Size of set = ${set.size}`)



