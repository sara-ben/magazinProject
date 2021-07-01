const mongoose = require('mongoose');

const MagazinSchema = mongoose.Schema({
    id: {
        type: String,
        require
    },

    date: {
        type: Date,
        require
    },
    
    title: {
        type: String,
        require
    },
    posts:[
     { type: mongoose.Schema.Types.ObjectId, ref: 'Post' }
    ]
})

module.exports = mongoose.model('Magazin', MagazinSchema);