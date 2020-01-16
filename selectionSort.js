function selectionSort(array){
    let start = 0;
    while(start < array.length-1){
        let smaller = start;
        for(let i=start; i<array.length;i++){
            if(array[smaller] > array[i]) smaller=i;
        }
        swap(start,smaller,array);
        start++;
    }
    return array;
}

function swap(a,b, array){
    let temp=array[b];
    array[b] = array[a];
    array[a] = temp;
}



console.log(selectionSort([8,5,2,9,5,6,3]));