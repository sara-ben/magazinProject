const router=require("express").Router();
const user=require("../controllers/user");

router.get('/getAllUsers',user.getAllUsers);
router.get('/newUser',user.newUser);


 module.exports=router;