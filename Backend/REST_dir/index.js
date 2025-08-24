const express = require("express");
const app = express();
const port = 8080;

const path = require("path");

const {v4:uuidv4} = require('uuid');

const methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts =[
    {
        id: uuidv4(),
        username: "Mourya",
        content: "I am a Backend Developer"
    },
    {
        id: uuidv4(),
        username: "Chanakya",
        content: "I am a Director"
    },
    {
        id: uuidv4(),
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
    let id = uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts");
});

app.get("/posts/:id", (req,res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", {post});
});

app.patch("/posts/:id", (req,res) => {
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    res.redirect("/posts");
});

app.get("/posts/:id/edit", (req,res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", {post});
});

app.delete("/posts/:id", (req,res) => {
    let{id} = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
})