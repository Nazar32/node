const fs = require('fs');
const path = require('path');
const render = require('../lib/render');

function error(req, res) {    
    render('error.html', { error: 'No movies found' }, (error, html) => {
            if (error) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                return res.end(error.message);
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(html);            
        });    
}

module.exports = error;