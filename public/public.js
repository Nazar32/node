"use strict";
const path = require('path');
const fs = require('fs');

module.exports = function publicRoute(req , res) {
    let extension = path.extname(req.url);
    let contentType = '';

    switch (extension) {
        case '.html':
            contentType = 'text/html';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpeg';
            break;
        default:
            contentType = 'text/plain';
            break;
    }
    const stream = fs.createReadStream(path.join(__dirname, req.url));
    stream.pipe(req);

    stream.on('error', err => {
        if (err.code === 'ENOENT') {
            console.log(err);
            res.writeHead(404, {
                'Content-Type': 'text/plain'
            });
            res.end('Not found');
        } else {
            res.writeHead(500, {
                'Content-Type': 'text/plain'
            });
            res.end('Server error');
        }
    });
};