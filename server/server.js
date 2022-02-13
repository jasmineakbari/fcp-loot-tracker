require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const PlayerModel = require('./models/Players');
const UserModel = require('./models/User');
const Role = require('./models/Role');

app.use(cors()); 
// allows json in requests
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


// create connection to the DB
mongoose.connect('mongodb+srv://' + 
    process.env.db_username + 
    ':' + 
    process.env.db_password + 
    '@cluster0.8a7hv.mongodb.net/fcp-loot-tracker?retryWrites=true&w=majority'
);


///////// temp location for express api requests /////////
// Player routes

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

// User routes

app.get('/login', (req, res) => {

});

app.post('/sign-up', (req, res) => {

});



// create local express connection
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`)

}); 