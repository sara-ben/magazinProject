const mongoose=require("mongoose");

const PostSchema=mongoose.Schema({

    id: {
        type: String,
        require
    },

    date: {
        type: String,
        require
    },
    numViwe:{
        type: Number,
    },

    title:{
        type: String,
        require
    },
    disciption:{
        type: String,
        require
    },
    content:{
        type: String,
        require,
        minlength:6
    },
   
    Magazin: 
        { type: mongoose.Schema.Types.ObjectId, ref: 'Magazin' }
    ,

})
module.exports = mongoose.model('Post', PostSchema);