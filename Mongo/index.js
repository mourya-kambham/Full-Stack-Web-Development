const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err)=>console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

/*const user1 = new User({
  name: "Adam",
  email: "adam@gmail.com",
  age: 43,
});

user1.save();

const user2 = new User({
  name: "Eve",
  email: "eve@gmail.com",
  age: 38,
});

user2.save();*/

User.insertMany([
  {name: "Tony", email: "tony@gmail.com", age: 51},
  {name: "Peter", email: "peter@gmail.com", age: 22},
  {name: "Bruce", email: "bruce@gmail.com", age: 47},
]);