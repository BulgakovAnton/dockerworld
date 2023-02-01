const express = require("express");
const mongoose = require("mongoose");
const {connectDB} = require("./helpers/db");
const {host, port, db} = require("./configuration");

const app = express();
const postSchema = new mongoose.Schema({
    name: String
});
const Post = mongoose.model("Post", postSchema);

app.get("/test", (req, res) => {
    res.send("Our api server is working correctly");
});

const startServer = () => {
    app.listen(port, () => {
        console.log(`Started api serice on port ${port}`);
        console.log(`Started api serice on host ${host}`);
        console.log(`Our database! ${db}`)

        const silence = new Post({ name: "Silence" });
        silence.save(function(err, savedSilence) {
            if (err) return console.error(err);
            console.log('savedSilence' , savedSilence);
        });
    });
};

connectDB()
  .on('error', console.log)
  .on('disconnect', connectDB)
  .once('open', startServer);