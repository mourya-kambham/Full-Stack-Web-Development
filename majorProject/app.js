const express = require("express");
const app = express();
const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("Connected to DB");
  }).catch(err => {
    console.log(err);
  });

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/stayeaze");
}

app.get("/", (req,res) => {
    res.send("Route is working");
});

app.listen(8080, () => {
    console.log("server is running on port 8080");
});