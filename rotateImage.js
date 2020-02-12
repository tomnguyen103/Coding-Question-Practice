function rotateMatrix(a){
    // Swap diagonally 
    for(var i=0;i<a.length;i++){
        for(var j=i;j<a.length;j++){
            var temp = a[i][j];
            a[i][j] = a[j][i];
            a[j][i] = temp;
        }
    }

    // Swap columns in each row
    for(var k=0; k<a.length;k++){
        // Iterate to middle number and perform the swap
        for(var l=0;l<(a.length/2);l++){
            var temp2 = a[k][l];
            a[k][l] = a[k][a.length-1-l] // -l in case even number for each row
            a[k][a.length-1-l] = temp2;
        }
    }
    return a;
}

a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

b = [
    [1, 2, 3, 10],
    [4, 5, 6, 11],
    [7, 8, 9, 12],
    [13, 14, 15, 16]
]

console.log(rotateMatrix(a))
console.log(rotateMatrix(b))