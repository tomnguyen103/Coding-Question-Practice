
// O(n^2) time || O(n) space
// function isPalindrome(string){
//     let reStr = '';
//     for(let i=string.length-1; i>=0; i--){
//         reStr += string[i];
//     }
//     return string === reStr;
// }

// O(n) time | O(1) space
function isPalindrome(string){
    let i = 0;
    let j = string.length-1;
    let middle = Math.floor(string.length/2);
    while (i<=middle){
        if(string[i]==string[j]){
            return true;
        }else{
            i++;
            j--;
        }
        return false;
    }
}

console.log(isPalindrome("abcdcba"));
console.log(isPalindrome("alexi"));