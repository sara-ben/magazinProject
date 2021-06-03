const Magazine = require('../models/Magazine')

 const createMagazine = async(req,res)=>{
    console.log("---create magazine----")
    const {title, imgPath, } = req.body;
    try{
        const newMagazine = new Magazine({
            title,
            date:Date.now(),
            imgPath
        })
        return res.status(200).json(newMagazine);
    }
    catch(err){
        return res.status(500).send(err.message);
    }
    
}
module.exports={createMagazine};