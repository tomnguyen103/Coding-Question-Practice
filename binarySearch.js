function binarySearch(arr, target){
    return BHelper(arr,target,0, arr.length-1);
}

function BHelper(arr,target,left,right){
    // let middle = Math.floor(arr.length/2);
    // let result = arr[middle];
    while(left<=right){
        let middle = Math.floor((left+right)/2);
        let result = arr[middle];

        if(target == result){
            return middle;
        }else if(target < result){
            right = middle - 1;
        }else{
            left = middle + 1;
        }
    }
    return -1;
}



console.log(binarySearch([0,1,21,33,45,45,61,71,72,73], 33));
console.log(binarySearch([0,1,21,33,45,45,61,71,72,73], 34));