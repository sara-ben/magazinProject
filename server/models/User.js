const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    name:{
        type: String,
        require
    },
    passwrod:{
        type: String,
        require,
        minlength:6
    },
    email:{
        type: String,
        require
    },
    Images: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Image' }
    ],

})
module.exports = mongoose.model('User', userSchema);