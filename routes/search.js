const url = require('url');

const omdb = require('../lib/omdb');
const render = require('../lib/render');

function search(req, res) {    
    let searchMovie = url.parse(req.url, true);

    omdb.get(searchMovie.query.title, (error, movie) => {
        if (error) {
            console.log(error);
            throw error;
        }
                
        render('movie.html', movie.results[0], (error, html) => {
            if (error) {
                throw error;
            }

            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(html);
        });        
    })
}

module.exports = search;