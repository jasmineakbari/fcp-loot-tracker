require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PlayerModel = require('./models/Players');
const cors = require('cors');

// allows json requests
app.use(express.json());
// allows requests from BE  to FE
app.use(cors());

// create connection to the DB
mongoose.connect('mongodb+srv://' + 
    process.env.db_username + 
    ':' + 
    process.env.db_password + 
    '@cluster0.8a7hv.mongodb.net/fcp-loot-tracker?retryWrites=true&w=majority'
);

// temp location for express api requests
app.get('/get-players-info', (req, res) => {
    PlayerModel.find({}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result) 
        }
    })
});


app.post('/add-player-info', async (req, res) => {
    const player = req.body;
    const newPlayer = new PlayerModel(player);

    await newPlayer.save();
    res.json(player);

    if (err) {
        res.json(err)
    }
});

// create local express connection
app.listen(3001, () => {
    console.log('Server running!')
}); 