const express = require("express");
const app = express();
let port = 8080;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

app.get("/ig/:username", (req,res) => {
    const followers = ["Abhi", "Balu", "Chinnu", "Dhanush"];
    let {username} = req.params;
    res.render("instagram.ejs", {username, followers});
});