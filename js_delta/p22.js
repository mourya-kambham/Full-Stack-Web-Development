//Extract unique characters from the string

let str = "abcdabcdefggghi";
function getUnique(str){
    let ans = " ";
    for(let i=0;i<str.length;i++){
        let currentChar = str[i];
        if(ans.indexOf(currentChar) == -1){
            ans+=currentChar;
        }
    }
    return ans; 
}
console.log(getUnique(str));