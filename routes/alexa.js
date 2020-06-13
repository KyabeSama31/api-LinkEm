var express = require("express");
var router = express.Router();
const alexaController = require("../controllers/alexa")

router
    .route("/")
    .get(alexaController.home);

module.exports = router;