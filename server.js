'use strict';

const http = require('http');

const routes = require('./routes');

http.createServer((req, res) => {
    if (req.url.match('^.*\.(css|png|html|jpg|JPG|gif|GIF|doc|DOC|pdf|PDF)$')) {
        routes.publicRoute(req, res);
    } else if (req.url === '/') {
        routes.home(res);
    } else if (req.url.startsWith('/search')) {
        routes.search(req, res);
    } else {
        routes.error(req, res);
    }
}).listen(8080, () => console.log('Server runs'));

