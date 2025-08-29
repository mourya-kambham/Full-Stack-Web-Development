const { faker } = require("@faker-js/faker");
const mysql2 = require("mysql2");
const express = require("express");
const app = express();
let port = 8080;
const path = require("path");
const methodOverride = require("method-override");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));

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

app.get("/user", (req,res) => {
  let q = "SELECT * FROM user";
  try{
    connection.query(q, (err, users) => {
      if(err) throw err;
      res.render("show.ejs", {users});
    });
  }catch(err){
    console.log(err);
    res.send("Some error in Database");
   }
});

app.get("/user/:id/edit", (req,res) => {
  let {id} = req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`;
  try{
    connection.query(q, (err, result) => {
      if(err) throw err;
      let user = result[0];
      res.render("edit.ejs", {user});
    });
  }catch(err){
    console.log(err);
    res.send("Some error in Database");
   }
});

app.patch("/user/:id", (req,res) => {
  let {id} = req.params;
  let {password: formPass, username: newUsername} = req.body;
  let q = `SELECT * FROM user WHERE id='${id}'`;
  try{
    connection.query(q, (err, result) => {
      if(err) throw err;
      let user = result[0];
      if(formPass != user.password){
        res.send("WRONG password!!");
      }else{
        let q2 = `UPDATE user SET username = '${newUsername}' WHERE id = '${id}'`;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.redirect("/user");
        });
      }
    });
  }catch(err){
    console.log(err);
    res.send("Some error in Database");
   }
});

app.listen(port, () => {
  console.log(`server is listening to port ${port}`);
});
