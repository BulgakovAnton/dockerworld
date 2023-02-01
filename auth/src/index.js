const express = require("express");
const {connectDB} = require("./helpers/db");
const {host, port, db} = require("./configuration");

const app = express();
app.get("/test", (req, res) => {
    res.send("Our auth server is working correctly");
});

const startServer = () => {
    app.listen(port, () => {
        console.log(`Started auth serice on port ${port}`);
        console.log(`Started api serice on host ${host}`);
        console.log(`Our database! ${db}`)

    });
};

connectDB()
  .on('error', console.log)
  .on('disconnect', connectDB)
  .once('open', startServer);