const { faker } = require("@faker-js/faker");
const mysql2 = require("mysql2");
const express = require("express");
const app = express();
let port = 8080;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'Mourya@2104'
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

app.get("/", (req,res) => {
  let q = "SELECT count(*) FROM user";
  try{
  connection.query(q, (err, result) => {
    if(err) throw err;
    let count = result[0]["count(*)"]; //prints only value
    res.render("home.ejs", {count});
   });
  }catch(err){
    console.log(err);
    res.send("Some error in Database");
   }
});

app.listen(port, () => {
  console.log(`server is listening to port ${port}`);
});
