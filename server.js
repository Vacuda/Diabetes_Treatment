const express = require("express");
const path = require("path");
const app = express();
// const mongoose = require('mongoose');

//////

app.listen(8000, () => console.log("listening on port 8000"));

app.use(express.json());
app.use(express.static( __dirname + '/public/dist/public' ));

//////

// require('./server/config/database.js');
// require('./server/config/routes.js')(app);

app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./public/dist/public/index.html"))
});