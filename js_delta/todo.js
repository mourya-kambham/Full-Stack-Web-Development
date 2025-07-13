let todo=[];
let req = prompt("Please enter your req");
while(true){
    if(req == "quit"){
        console.log("quitting app");
        break;
    }

    if(req == "list"){
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
    }else if(req == "add"){
        let task = prompt("Please enter your task");
        todo.push(task);
        console.log("task added");
    }else if(req == "delete"){
        let idx = prompt("Please enter the index of task");
        todo.splice(idx,1);
        console.log("task deleted");
    }else{
        console.log("wrong req")
    }
    req = prompt("Please enter your req");
}