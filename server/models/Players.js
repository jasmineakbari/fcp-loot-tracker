const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    char_first_name: {
        type: String,
        required: true,
    },
    char_last_name: {
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

const PlayerModel = mongoose.model('players', PlayerSchema);

module.exports = PlayerModel;