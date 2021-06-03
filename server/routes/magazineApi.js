const router = require('express').Router();
var magazine = require("../controllers/magazine");



router.post('/createMagazine', magazine.createMagazine);

module.exports=router;