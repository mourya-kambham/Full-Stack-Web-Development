const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(()=>{
    console.log("connection successful");
  })
  .catch((err)=>console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/textapp");
}

let chat1 = new Chat({
  from: "neha",
  to: "sneha",
  msg: "send me",
  created_at: new Date(),
});

chat1.save()
  .then((res)=>{
    console.log(res);
  })
  .catch((err)=>{
    console.log(err);
  });

app.set("views", path.join(__dirname, "views"));
app.set("viewengine", "ejs");

app.get("/", (req,res) => {
    res.send("working root");
});

app.listen(8080, ()=>{
    console.log("server is listening on port 8080");
});
