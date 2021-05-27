const User= require('../models/User.js')
const jwt = require('jsonwebtoken');
// const request = require('request');
const dotenv = require('dotenv');
// const ff=(req,res)=>{
//     console.log("hhhhhhh");
//     res.json({jj:"jjjjjj"})
// }
const newUser=async(req,res)=>{
    console.log("---newUser----")
    const{name,email,password}=req.body;
    let user=new User({
        name,
        email,
        password
    });
    try{
        console.log("---newUser2----")
             await user.save();
     let token=jwt.sign({email: req.body.email,password: req.body.password},'secret');
    console.log(token);
    res.status(200).send({"user": user});
    }
    catch(error){
        res.status(500).json({"error": error});
    }
}




const loginC = async (req, res) => {
  try {
console.log('try')
    let user = await User.findOne({
      email: req.params.email,
    });
    console.log(user)
    if (user < 1) {
      console.log('if')
      res.send("The user is not defined, Please register");
      console.log('if')
    }
    else {
      console.log('else')
      let token = jwt.sign({ email: req.params.email, password: req.params.password }, 'secret')
      res.send({ "messege": "You have successfully logged in", user, token });
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

  
  const login = async (req, res) => {
    try {
      // let user = await User.findOne({
      //   email: req.params.email,
      //   password: req.params.password,
      // });
    let user=await User.findById(req.params.email)
      if (user<1) {
        console.log(user)
        res.send("The user is not defined, Please register");
      }
      else {
        let token = jwt.sign({ email: req.params.email, password: req.params.password }, process.env.SECRET)
        res.send({ "messege": "You have successfully logged in", user, token });
        
      }
// if(user){
//   let token = jwt.sign({ email: req.params.email, password: req.params.password },
//     "secret")
//         res.send({ "messege": "You have successfully logged in", user, token });
// }
// else{
//   res.send("The user is not defined, Please register");
// }


    } catch (err) {
      res.status(500).json(err);
    }
  }
// const logIn=async(req,res)=>{
//     try{
//         console.log("---logIn----")
//         let user=await findOne({
//             email: req.body.email,
//             password: req.body.password
//         });
// if(user<1){
//     res.send("dont find....");   
// }
// else{
//     console.log("---logIn2----")
//     // let token=jwt.sign({email: req.params.email,passwrod: req.params.passwrod},process.env.SECRET);
//     res.status(200).send({"massage":"wellcom you log-in user",user})
// }
//     }
//     catch(error)
//     {
//         res.status(500).json({error})
//     }
// }
module.exports={ login, newUser,loginC};