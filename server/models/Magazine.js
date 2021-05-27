import mongoose from 'mongoose';

const magazineSchema = new Schema({ 
    title: {type:String, required:true}, 
    date: {type:Date, required:true}, 
    password: {type:String, required:true}, 
    userId: {type:mongoose.Schema.Types.ObjectId, ref:'User'},
    posts :[ 
        { type:mongoose.Schema.Types.ObjectId, ref:'Post'},
    ]
    
});

module.exports= mongoose.model(Magazine, 'magazineSchema');
