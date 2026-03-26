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

let allChats = [
    {
        from: "peter",
        to: "tony",
        msg: "hey tony I am spiderman",
        created_at: new Date(),
    },

    {
        from: "steve",
        to: "thor",
        msg: "I am worthy",
        created_at: new Date(),
    },

    {
        from: "loki",
        to: "thor",
        msg: "For you, for all of us",
        created_at: new Date(),
    },
];

Chat.insertMany(allChats);
