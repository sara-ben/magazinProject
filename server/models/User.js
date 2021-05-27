import mongoose from 'mongoose';

const userSchema = new Schema({ 
    userName: {type:String, required:true}, 
    email: {type:String, required:true}, 
    password: {type:String, required:true}, 
    magazines :[ 
        { type:mongoose.Schema.Types.ObjectId, ref:'Magazine'},
    ]
    
});

module.exports= mongoose.model('User',userSchema);

