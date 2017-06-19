const http = require('http');
const publicRoute = require('./public');
const os = require("os");

http.createServer((req, res) => {
    if (req.url.match('/.(html|css|js|png|jpg)$/')) {
        publicRoute(req, res);
    } else if (req.url === '/') {

    } else if (req.url === '/search') {

    }
}).listen(3001, () => { console.log(`Runs on: http://${os.hostname()}:3001`) });