'use strict';

const http = require('http');
const publicRoute = require('./routes/publicRoute');
const home = require('./routes/home');
const search = require('./routes/search');

http.createServer((req, res) => {
    if (req.url.match('^.*\.(css|html|jpg|JPG|gif|GIF|doc|DOC|pdf|PDF)$')) {
        publicRoute(req, res);
    } else if (req.url === '/') {
        home(res);
    } else if (req.url.startsWith('/search')) {
        search(req, res);
    } else {

    }
}).listen(8080, () => console.log('Server runs'));

