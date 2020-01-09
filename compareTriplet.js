function compareTriplets(a, b) {
    let c=0;
    let d=0;
    for(var i=0;i<a.length+1;i++){
        if(a[i]>b[i]){
            c+=1;
        }else if(a[i]<b[i]){
            d+=1;
        }
    }
    return [c,d]

}

console.log(compareTriplets([5,6,7], [3,6,10]))