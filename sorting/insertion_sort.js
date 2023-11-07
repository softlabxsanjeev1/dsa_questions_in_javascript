// insertion sort => pick and put in sorted part of array 
// first position ele sort in first round

function insertionsort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let numberToInsert = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > numberToInsert) {
            arr[j + 1] = arr[j]
            j = j - 1
        }
        arr[j + 1] = numberToInsert
    }
}

//BigO O(n^2)

const arr = [8, 20, -2, 4, -6]
insertionsort(arr)
console.log(arr)