const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

// bodyParser middleware
app.use(bodyParser.json());

// database
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const port = process.env.PORT || 5000;

// routes
const users = require('./routes/api/users');
app.use('/api/users', users);

mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('connected'))
    .catch(err => console.log(err));

app.listen(port, () => console.log(`listening on ${port}`));