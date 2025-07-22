//printing JS output in node terminal

let args = ProgressEvent.argv
for(let i=2; i<args.length;i++){
    console.log("Hi", args[i]);
}