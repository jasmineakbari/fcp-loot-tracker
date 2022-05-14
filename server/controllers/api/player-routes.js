const router = require('express').Router();

// get all players
router.get('/get-players-info', (req, res) => {
    PlayerModel.find({}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result) 
        }
    })
});

// add player
router.post('/add-player-info', async (req, res) => {
    const player = req.body;
    const newPlayer = new PlayerModel(player);

    await newPlayer.save();
    res.json(player);

    if (err) {
        res.json(err)
    }
});

module.exports = router;