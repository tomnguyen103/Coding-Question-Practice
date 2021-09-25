function binarySearch(arr, target) {
    arr.sort();
    //console.log(arr);
    return BHelper(arr, target, 0, arr.length - 1);
}

function BHelper(arr, target, left, right) {
    // let middle = Math.floor(arr.length/2);
    // let result = arr[middle];
    while (left <= right) {
        let middle = left + Math.floor((right - left) / 2);
        let result = arr[middle];
        if (target == result) {
            return middle;
        } else if (target < result) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return -1;
}


console.log(binarySearch([0, 1, 65, 33, 45, 50, 61, 71, 72, 73], 65));
console.log(binarySearch([0, 1, 21, 33, 45, 50, 61, 71, 72, 73], 34));