require('dotenv').config();
const express = require('express');
const path = require('path');
const routes = require('./controllers');
const cors = require('cors');
const session = require('express-session');
const { db, secret } = require('./app/config/connection');
const app = express();

const sess = {
    secret: secret,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    db: db
};

app.use(session(sess));

app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(routes);

// create local express connection
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`)

}); 