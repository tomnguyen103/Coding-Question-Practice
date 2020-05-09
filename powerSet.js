function powerset(array, index = null) {
// Write your code here.
    if(index===null){
        index = array.length - 1;
    }
    if (index < 0){
        return [[]];
    }
    const ele = array[index];
    const subsets = powerset(array, index-1);
    const length = subsets.length;
    for (let i=0;i<length;i++){
        const currentSub = subsets[i];
        subsets.push(currentSub.concat(ele));
    }
    return subsets;
}


array = [1,2,3,4]
console.log(powerset(array));

/**
 * input [1,2,3,4]
 * output
 * [
 * [],          [ 1 ],
 * [ 2 ],       [ 1, 2 ],
 * [ 3 ],       [ 1, 3 ],
 * [ 2, 3 ],    [ 1, 2, 3 ],
 * [ 4 ],       [ 1, 4 ],
 * [ 2, 4 ],    [ 1, 2, 4 ],
 * [ 3, 4 ],    [ 1, 3, 4 ],
 * [ 2, 3, 4 ], [ 1, 2, 3, 4 ]
 * ]
 */