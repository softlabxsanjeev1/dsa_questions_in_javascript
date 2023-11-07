// pic Element from that position and compare
const array = [2, 4, 6, 7, 8, , 9, 7, 4, 3]
const arr1 = []

const linearSearch = (array, target) => {
    if (array.length <= 0) {
        return console.log("Array is empty")
    }
    for (let i = 0; i < array.length; i++) {
        array[i] == target
        return 1
    }
    return -1
}


// big O => O(n)

console.log(linearSearch(arr1, 3))
console.log(linearSearch(array, 8))