
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
    if(string=="") return "String is empty.";
    let str = string.replace(/[^a-z0-9]/gi,"").toLowerCase();
    console.log(str);
    let i = 0;
    let j = str.length-1;
    while (i<j){
        if(str[i]!==str[j]){
            return string + " is not palindrome.";
        }
        i++;
        j--;
    }
    return string + " is palindrome.";
}
console.log(isPalindrome("02-02-2020"));
console.log(isPalindrome("03-02-2020"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome(""));