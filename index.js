const movies = require('./movieDB/movies.json')
const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config();

app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port = process.env.PORT || 3000

app.get('/getMovies', (req, res) => {
    res.send(datafromthing);
})

app.get('/searchMovieByName/:movieTitle', (req, res) => {
    const { movieTitle } = req.params
    if (!movieTitle) return res.send({ error: 'movie not found' });
    const movie = movies.filter((movieObj) => movieObj.title.includes(movieTitle));
    res.send(movie);
})

app.get('/searchMovieByGenre/:genre', (req, res) => {
    const { genre } = req.params
    if (!genre) return res.send({ error: 'movie not found' });
    const movie = movies.filter((movieObj) => movieObj.genre.includes(genre));
    res.send(movie);
})



app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}:`);
})