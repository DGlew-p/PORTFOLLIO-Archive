var express = require("express");
var router = express.Router();
const emailCtrl = require("../controller/emailCtrl");

router.post("/send", emailCtrl.create);

module.exports = router;
