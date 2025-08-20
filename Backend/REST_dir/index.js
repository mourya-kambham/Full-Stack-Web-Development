const express = require("express");
const app = express();
const port = 8080;

const path = require("path");

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts =[
    {
        username: "Mourya",
        content: "I am a Backend Developer"
    },
    {
        username: "Chanakya",
        content: "I am a Director"
    },
    {
        username: "Shanmukh",
        content: "I am a Businessman"
    },
];

app.listen(port, () => {
    console.log(`app is listening to port ${port}`);
});

app.get("/posts", (req,res) => {
    res.render("rest.ejs", {posts});
});

app.get("/posts/new", (req,res) => {
    res.render("form.ejs");
});

app.post("/posts", (req,res) => {
    let {username,content} = req.body;
    posts.push({username,content});
    res.redirect("/posts");
});