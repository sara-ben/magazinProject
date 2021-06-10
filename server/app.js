const express=require('express');
const mongoose=require('mongoose');
const router = require("./routes/api");
const bodyParser=require("body-parser");
const dotenv=require('dotenv');
///
 dotenv.config();
 const app=express();

 const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}

 mongoose.connect('mongodb+srv://sara:sara@cluster0.ihnpn.mongodb.net/shope?retryWrites=true&w=majority' ,connectionParams)
 .then(()=>{
     console.log("connected to db");
 })
 .catch((err)=>{
     console.log("error: "+err);
 })

 app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Authorization, authorization, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

 app.use(bodyParser.json({ limit: '50mb' }));
 app.use(bodyParser.urlencoded({
     limit: '50mb',
     extended: true,
     parameterLimit: 50000
 }));

 app.use(bodyParser.json())
 app.use('/', router);

 app.listen(4000,()=>{console.log("listen in port 4000")});



