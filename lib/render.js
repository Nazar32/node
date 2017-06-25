const fs = require('fs');
const path = require('path');

function render(fileName, movie, done) {
    fs.readFile(path.resolve('public', fileName), 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        const html = data.replace(/{{([^{}]*)}}/g, (placeholder, property) => {          
            return movie[property] || placeholder;
        });

        done(null, html);
    })
}

module.exports = render;
