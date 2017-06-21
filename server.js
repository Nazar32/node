'use strict';

const http = require('http');
const publicRoute = require('./routes/publicRoute');

http.createServer((req, res) => {
    if (req.url.match('^.*\.(css|html|jpg|JPG|gif|GIF|doc|DOC|pdf|PDF)$')) {
        publicRoute(req, res);
    } else if (req.url === '/') {
        
    } else if (req.url.startsWith('/search')) {
        
    } else {
        
    }
}).listen(8080, () => console.log('Server runs'));
