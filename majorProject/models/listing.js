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
            default: "https://in.images.search.yahoo.com/images/view;_ylt=Awr1QacaEMlpws0w3QS9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzMxMGNiMGU3NTUxODU5MmI0ZmMwYTYwODM0MzIwNDM0BGdwb3MDNzYEaXQDYmluZw--?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dunsplash%2Bimages%26fr%3Dmcafee%26nost%3D1%26tab%3Dorganic%26ri%3D76&w=1600&h=840&imgurl=petapixel.com%2Fassets%2Fuploads%2F2022%2F12%2Fwhat-is-unsplash.jpg&rurl=https%3A%2F%2Fpetapixel.com%2Fwhat-is-unsplash%2F&size=61KB&p=unsplash+images&oid=310cb0e75518592b4fc0a60834320434&fr2=&fr=mcafee&tt=Unsplash%3A+What+is+It+and+How+Does+It+Work%3F+%7C+PetaPixel&b=61&ni=80&no=76&ts=&tab=organic&sigr=7boJXuacee85&sigb=KCcWhqiaEnYg&sigi=LnuO52Cm2sYT&sigt=eNLc9BwZ4wEo&.crumb=LXVIU4skcZj&fr=mcafee",
            set: (v) => 
              v === "" 
                ? "https://in.images.search.yahoo.com/images/view;_ylt=Awr1QacaEMlpws0w3QS9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzMxMGNiMGU3NTUxODU5MmI0ZmMwYTYwODM0MzIwNDM0BGdwb3MDNzYEaXQDYmluZw--?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dunsplash%2Bimages%26fr%3Dmcafee%26nost%3D1%26tab%3Dorganic%26ri%3D76&w=1600&h=840&imgurl=petapixel.com%2Fassets%2Fuploads%2F2022%2F12%2Fwhat-is-unsplash.jpg&rurl=https%3A%2F%2Fpetapixel.com%2Fwhat-is-unsplash%2F&size=61KB&p=unsplash+images&oid=310cb0e75518592b4fc0a60834320434&fr2=&fr=mcafee&tt=Unsplash%3A+What+is+It+and+How+Does+It+Work%3F+%7C+PetaPixel&b=61&ni=80&no=76&ts=&tab=organic&sigr=7boJXuacee85&sigb=KCcWhqiaEnYg&sigi=LnuO52Cm2sYT&sigt=eNLc9BwZ4wEo&.crumb=LXVIU4skcZj&fr=mcafee" 
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
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;