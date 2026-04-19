const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        url: {
            type: String,
            default: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
            set: (v) => 
              v === "" 
                ? "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d" 
                : v,
        },
        filename: {
            type: String,
            default: "default-image",
        },
    },
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        },
    ],
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;