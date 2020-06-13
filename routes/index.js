//Liste des fichiers routes
//const <nomRooter> = require(<path du fichier>)

const alexaRooter = require("./alexa")




//Link des routes au serveur
const express = require("express");
const app = express();

//app.use("</nom>, <nomRooter>")

app.use("/alexa", alexaRooter)




module.exports = app;
