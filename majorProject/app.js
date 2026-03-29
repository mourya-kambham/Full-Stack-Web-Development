const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");

main()
  .then(() => {
    console.log("Connected to DB");
  }).catch(err => {
    console.log(err);
  });

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/stayeaze");
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));

app.get("/", (req,res) => {
    res.send("Route is working");
});

app.get("/listings", async (req,res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", {allListings});
});

app.get("/listings/:id", async (req,res) => {
  let {id} = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show.ejs", {listing});
});

/*app.get("/testListing", async (req,res) => {
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
});*/

app.listen(8080, () => {
    console.log("server is running on port 8080");
});