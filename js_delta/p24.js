//Number of Vowels in a string

let str = "Amrita Vishwa Vidyapeetham";
function findVowel(str){
    let vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let count = 0;
    for(let i=0;i<str.length;i++){
        for(let j=0;j<vowel.length;j++){
            if(str[i] == vowel[j]){
                count += 1;
            }
        }
    }
    return count;
}
console.log(findVowel(str));