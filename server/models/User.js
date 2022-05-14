const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,

    },
    password: { 
        type: String,
        required: true
    },
    roles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
    }],
    char: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Character"
    }]
})

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;