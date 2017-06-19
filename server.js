'use strict';
const http = require('http');
const publicRoute = require('./routes/public');
const os = require("os");

http.createServer((req, res) => {
    if (req.url.match('/.(html|css|js|png|jpg)$/')) {
        publicRoute(req, res);
    } else if (req.url === '/') {

    } else if (req.url === '/search') {

    }
}).listen(3001, () => { console.log(`Sever runs`) });