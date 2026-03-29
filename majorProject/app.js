const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

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

app.get("/testListing", async (req,res) => {
     let sampleListing = new Listing ({
        title: "My new Villa",
        description: "by the beach",
        price: 1200,
        location: "ECR, Chennai",
        country: "India",
     });
     await sampleListing.save();
     console.log("sample was saved");
     res.send("Testing successful");
});

app.listen(8080, () => {
    console.log("server is running on port 8080");
});