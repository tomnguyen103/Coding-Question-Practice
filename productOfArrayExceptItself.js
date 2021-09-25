// var productExceptSelf = function(nums) {
    
//     var N = nums.length;
//     let left_array =  new Array();
//     let right_array = new Array();
    
//     let result = new Array();
    
//     left_array[0] = 1
//     right_array[N-1] = 1
    
//     for(let i=1;i<N;i++){
//         left_array[i] = nums[i-1] * left_array[i-1];
//     }
//     for(let j=N-2; j>=0; j--){
//         right_array[j] = nums[j+1] * right_array[j+1];
//     }
    
//     for(let i=0; i<N; i++){
//         result[i] = left_array[i] * right_array[i];
//     }
    
//     return result;
// };


var productExceptSelf = function(nums) {
    
    var N = nums.length;
    
    let result = new Array();
    
    result[0] = 1
    for(let i=1; i<N; i++){
        result[i] = nums[i-1] * result[i-1];
    }
    let R = 1;
    for(let i=N-1; i>=0; i--){
        result[i] = result[i]*R;
        R = nums[i]*R;
    }
    
    return result;
};

nums = [1,2,3,4]
console.log(nums);
console.log(productExceptSelf(nums));