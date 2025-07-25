const express = require("express");
const app = express();
let port = 8080;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

app.get("/search", (req,res) => {
    let {q,color} = req.query;
    if (!q){
        res.send("Nothing searched");
    }else{
        res.send(`Search results for query: ${q} & color: ${color}`);
    }
});