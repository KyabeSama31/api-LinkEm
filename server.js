const express = require("express")
const app = express()

// let router = require("./routes/index");
// app.use("/linkem", router)
var router = require("./routes/index");
app.use(router);


const port = 3000;

app.listen(port, function () {
    console.log('We are alive on port ' + port)
  })

  module.exports = app;
