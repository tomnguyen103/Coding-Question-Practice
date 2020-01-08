// function productSum(array){
//     let result = 0;
//     for(let i=0; i<array.length;i++){
//         let lev=1;
//         var str = array.toString();
//         if(str[i].charAt(0)=="["){
//             lev++;
//             result+= (lev*str[i])
//         }else if(str[i].charAt(0)=="]"){
//             lev=1;
//         }else{
//             result += array[i];
//         }   
//     }
//     return result;
// }

// function productSum(array,lev=1){
//     let result = 0;
//     for(const element of array){
//         if(Array.isArray(element)){
//             result += productSum(element,lev+1);
//             console.log("sum of special array result: "+result);
//         }else{
//             result += element;
//             console.log("regular array result: " +result);
//         }
//     }
//     return result*lev;
// }

function productSum(arr, lv=2) {
    let result = 0;
        for(let i=0; i<arr.length; i++){
            if(Array.isArray(arr[i])){
              result += productSum(arr[i],lv+1) * lv;
        }else{
            result += arr[i];
        }
    }
    return result;
}

console.log(productSum([5,2,[7,-1], 3, [6,[-13,8],4]]));