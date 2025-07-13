//Not working
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");
btn.addEventListener("click", function(event){
    event.preventDefault();
    let item = document.createElement("li");
    item.innerText = inp.value;
    let dltBtn = document.createElement("button");
    dltBtn.innerText = "Delete";
    dltBtn.classList.add("delete");
    item.appendChild(dltBtn);
    ul.append(item);
    inp.value = "";
})

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});
/*let delBtns = document.querySelectorAll(".delete");
for(dltBtn of delBtns){
    dltBtn.addEventListener("click", function(){
        let par = dltBtn.parentElement;
        par.remove();
    });
}
*/