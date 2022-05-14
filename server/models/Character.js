const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    prim_job: {
        type: String,
        required: true,
    },
    sec_job: {
        type: String,
        required: true,
    },
    tert_job: {
        type: String,
        required: true,
    },
    quad_job: {
        type: String,
        required: false,
    }
})

const CharacterModel = mongoose.model('Character', CharacterSchema);

module.exports = CharacterModel;