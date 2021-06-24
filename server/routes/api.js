const router = require('express').Router();
const magazin = require("../controllers/magazin.js");
const post = require("../controllers/post.js");
// const checkAuth= require('../Middelwere/aute');


router.post('/createMagazin', magazin.createMagazin);  
router.post('/createPost', post.createPost);



module.exports=router;
