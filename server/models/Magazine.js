const mongoose = require('mongoose');

const magazineSchema = mongoose.Schema({ 
    title: {type:String, required:true}, 
    date: {type:Date, required:true}, 
    imgPath: {type:String, required:true}, 
    // userId: {type:mongoose.Schema.Types.ObjectId, ref:'User'},
    posts :[ 
        { type:mongoose.Schema.Types.ObjectId, ref:'Post'},
    ]
    
});

module.exports= mongoose.model('Magazine', magazineSchema);
