const movies = require('./movieDB/movies.json')
const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config();

var http = require("http");

setInterval(function () { //keep heroku server running
    http.get("https://kabeli-movies-api.herokuapp.com/");
}, 300000); // every 5 minutes (300000)

app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('server is up')
})
app.get('/getMovies', (req, res) => {
    res.send(movies);
})


app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}:`);
})