const express = require("express");
const app = express();
let port = 8080;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

/*app.get("/ig/:username", (req,res) => {
    const followers = ["Abhi", "Balu", "Chinnu", "Dhanush"];
    let {username} = req.params;
    res.render("instagram.ejs", {username, followers});
});*/

app.get("/ig/:username", (req,res) => {
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if(data){
        res.render("instagram.ejs", {data: instaData[username]});
    }else{
        res.render("error.ejs");
    }
});
