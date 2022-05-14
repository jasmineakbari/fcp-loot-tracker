require('dotenv').config();
const mongoose = require('mongoose');

let secret = process.env.SECRET;

let db = mongoose.connect(
  'mongodb+srv://' + 
  process.env.db_username + 
  ':' + 
  process.env.db_password + 
  '@cluster0.8a7hv.mongodb.net/fcp-loot-tracker?retryWrites=true&w=majority'
);

// logs mongo queries being executed
mongoose.set('debug', true);

module.exports = db, secret;