var sortedSquares = function (arr) {
    let left = 0;
    let right = arr.length - 1;
    const result = new Array(arr.length);

    for (var i = arr.length - 1; i >= 0; i--) {
        if (Math.abs(arr[left]) > arr[right]) {
            result[i] = arr[left] * arr[left];
            left++;
        } else {
            result[i] = arr[right] * arr[right];
            right--;
        }
    }
    return result;
};

console.log(sortedSquares([-2, -1, 0, 3, 10]));

// var sortedSquares = function (A) {
//     const len = A.length;
//     const squares = Array(len);
//     let start = 0;
//     let end = len - 1;

//     for (let i = end; i >= 0; i--) {
//         const sq1 = A[start] ** 2;
//         const sq2 = A[end] ** 2;

//         if (sq1 > sq2) {
//             squares[i] = sq1;
//             start++;
//         } else {
//             squares[i] = sq2;
//             end--;
//         }
//     }

//     return squares;
// };

// console.log(sortedSquares([-2, -1, 0, 3, 10]));