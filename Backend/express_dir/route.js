const express = require("express");
const app = express();
let port = 8080;

app.listen(port,() =>{
    console.log(`app is listening on port ${port}`);
});

app.get("/", (req,res) => {
    res.send("You contacted root path");
});

app.get("/mobile", (req,res) => {
    res.send("You contacted mobile path");
});

app.get("/laptop", (req,res) => {
    res.send("You contacted laptop path");
});

app.get("*", (req,res) => {
    res.send("This path does not exist");
});