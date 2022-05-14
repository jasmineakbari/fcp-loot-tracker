const router = require('express').Router();

const loginRoutes = require('./login-routes');
const playerRoutes = require('./player-routes');

router.use('/login', loginRoutes);
router.use('/player', playerRoutes);


module.exports = router;