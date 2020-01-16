function bubbleSort(array){
    for(let i=0; i<array.length;i++){
        for(let j=i+1;j<array.length;j++){
            if(array[i]>array[j]){
                swap(i,j,array);
            }
        }
    }
    return array;
}

function swap(a,b,array){
    const temp = array[b];
    array[b] = array[a];
    array[a] = temp;
}

console.log(bubbleSort([8,5,2,9,5,6,3]));