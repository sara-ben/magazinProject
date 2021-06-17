const router = require('express').Router();
var magazin = require("../controllers/magazin.js");
const checkAuth= require('../Middelwere/aute');


router.post('/newMagazin', magazin.newMagazin);



module.exports=router;
