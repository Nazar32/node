const fs = require('fs');
const path = require('path');
const omdb = require('../lib/omdb');
const url = require('url');

function search(req, res) {    
    let searchMovie = url.parse(req.url, true);
    console.log(searchMovie);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    omdb.get(searchMovie.query.title, (error, movie) => {
        if (error) {
            throw error;
        }
        
        let resultMovie = movie.results[0];
        if (resultMovie) {
            let doc = d3.select(window.document)
            document.getElementById('movieDescription').innerText = resultMovie.overview;
        }
        console.log(movie.results[0]);
    })

    const stream = fs.createReadStream(path.resolve('public', 'movie.html'));
    stream.pipe(res);
}

module.exports = search;