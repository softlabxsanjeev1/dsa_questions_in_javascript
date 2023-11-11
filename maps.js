// map => it is like object but , itrable use for of loop to itrate 

const map = new Map([['a', 1], ['b', 2], ['c', 3]])
map.set('d', 6)
//search key
map.has('c')
for (const [key, value] of map) {
    console.log(`Key = ${key} Value = ${value}`)
}
console.log(`Size of map = ${map.size}`)
console.log("---------------------------------")


// delete value 
map.delete('b')
//search key
map.has('b')
for (const [key, value] of map) {
    console.log(`Key = ${key} Value = ${value}`)
}
console.log(`Size of map = ${map.size}`)
console.log("------------------------------")

// remove all elements of map
map.clear()
for (const [key, value] of map) {
    console.log(`Key = ${key} Value = ${value}`)
}
console.log(`Size of map = ${map.size}`)






