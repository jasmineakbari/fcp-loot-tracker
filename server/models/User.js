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
    }]
})

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;