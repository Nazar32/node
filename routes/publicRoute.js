'use strict';

const fs = require('fs');
const path = require('path');

function publicRoute(req, res) {
    const extension = path.extname(req.url);
    const fileName = req.url.slice(1);

    let contentType = '';
    let isImage = false;
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
            isImage = true;
            break;
        default:
            contentType = 'text/plain';
            break;
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', contentType);    
    const stream = fs.createReadStream(path.resolve('public', fileName));
    stream.pipe(res);
    stream.on('error', err => {
        console.log(err);
        if (err.code === 'ENOENT') {
            res.writeHead(404, {
                'Content-Type': 'text/plain'
            });
            res.end('Not found');
        } else {
            res.writeHead(500, {
                'Content-Type': 'text/plain'
            });
            res.end(err.message);
        }
    });
}

module.exports = publicRoute;