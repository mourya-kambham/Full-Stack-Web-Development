const express = require("express");
const app = express();
let port = 8080;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

app.set("view engine", "ejs");
app.get("/rolldice",(req,res) => {
    let diceValue = Math.floor(Math.random()*6)+1;
    res.render("roll_dice.ejs", {diceValue});
});