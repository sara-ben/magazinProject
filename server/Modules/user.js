const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    id: {
        type: String,
        require
    },

    name: {
        type: String,
        require
    },
    
    age: {
        type: Number,
        require
    },
    city: {
        type: String,
        require
    },
    email: {
        type: String,
        require
    },
    phone: {
        type: String,
        require
    },
})

module.exports = mongoose.model('User', UserSchema);