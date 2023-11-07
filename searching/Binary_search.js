
function binarysearch(arr, target) {
    let leftIndex = 0
    let rightIndex = arr.length - 1

    while (leftIndex <= rightIndex) {
        let midIndex = Math.floor((leftIndex + rightIndex) / 2)
        if (target == arr[midIndex]) {
            return midIndex
        }
        if (target < arr[midIndex]) {
            rightIndex = midIndex - 1
        } else {
            leftIndex = midIndex + 1
        }
    }
    return -1
}


// Big O = O(logn)


const array = [3, 5, 6, 7, 8, 3, 10]
console.log(binarysearch(array, 7))
console.log(binarysearch(array, 10))
console.log(binarysearch(array, 3))