const url = require('url');

const omdb = require('../lib/omdb');
const render = require('../lib/render');

function search(req, res) {    
    let searchMovie = url.parse(req.url, true);

    omdb.get(searchMovie.query.title, (error, data) => {
        let movie;
        if (data && data.results && data.results.length) {
            movie = data.results[0];
        } else if (!error) {
            error = {
                message: 'No movies found'
            }
        }
        if (error) {                      
            return render('error.html', { error: error.message }, (error, html) => {                
                if (error) {
                    res.writeHead(500, {'Content-Type': 'text/plain'});
                    return res.end(error.message);
                }
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(html);    
            });      
        }
        render('movie.html', movie, (error, html) => {                
            if (error) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                return res.end(error.message);
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(html);    
        });           
    })
}

module.exports = search;