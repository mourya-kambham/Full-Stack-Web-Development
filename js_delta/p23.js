//Largest string in an array
let country = ["Australia", "Germany", "USA", "South Africa"];
function longestString(country,large){
    for(let i=1; i<country.length;i++){
        if(country[i].length>large.length){
            large = country[i];
        }
    }
    return large;
}
console.log(longestString(country,country[0]));