require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.send('App is running');
});

const { jobs } = require('./jobs');
jobs();

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}!`);
});
