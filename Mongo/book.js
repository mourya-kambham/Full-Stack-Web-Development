const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err)=>console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        maxLength: 50,
    },
    author:{
        type: String
    },
    price:{
        type: Number,
        min: [1, "Price is too low to sell"],
    },
    discount:{
        type: Number,
        default: 0,
    },
});

const Book = mongoose.model("Book", bookSchema);

Book.findByIdAndUpdate("69c414fae921e135614bf4dc", {price: -100}, {runValidators: true})
  .then((res)=>{
    console.log(res);
  })
  .catch((err)=>{
    console.log(err.errors.price.properties.message);
  });

/*let book1 = new Book({
    title: "Once Upon A Time",
    price: "299",
});

book1.save()
  .then((res)=>{
    console.log(res);
  })
  .catch((err)=>{
    console.log(err);
  });*/

