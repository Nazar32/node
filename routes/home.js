const fs = require('fs');
const path = require('path');
const render = require('../lib/render');

function home(res) {    
     render('index.html', null, (error, html) => {
            if (error) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                return res.end(error.message);
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(html);            
        });    
}

module.exports = home;