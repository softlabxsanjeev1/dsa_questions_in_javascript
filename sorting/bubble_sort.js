// bubblesort => swap with next if greater last element sorted first

function bublesort(arr) {
    let swapped
    do {
        swapped = false
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true
            }
        }
    }
    while (swapped)
}


// complexity bigO = O(n^2)


// it perforn sorting in same array change in same array
const array = [2, 5, 4, 7, 8, 3, 4, 6]
bublesort(array)
console.log(array)