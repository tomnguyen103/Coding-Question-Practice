function insertionSort(array){
    for(let i =1; i<array.length;i++){
        let j = i;
        // console.log(i);
        // console.log(array[i]);
        // console.log(j);
        // console.log(array[j]);
        while(j>0 && array[j]< array[j-1]){
            // console.log(array[j]);
            // console.log(array[j-1]);
            swap(j,j-1,array);
            j-=1;
        }
        // array[j] = array[i];
    }
    return array;
}
// function insertionSort(array){
//     for(let i=1;i<array.length;i++){
//         let key = array[i];
//         let j = i-1;
//         while(j>=0 && array[j]> key){
//             array[j+1] = array[j];
//             j--;
//         }
//         array[j+1] = key;
//     }
//     return array;
// }


function swap(a,b,array){
    const temp=array[b];
    array[b]= array[a];
    array[a] = temp;
}

console.log(insertionSort([8,5,2,9,5,6,3]));