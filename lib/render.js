const fs = require('fs');
const path = require('path');

function render(fileName, data, done) {
    fs.readFile(path.resolve('public', fileName), 'utf8', (err, template) => {
        if (err) {
            return done(err);
        }
        if (!data) {
            return done(null, template);
        }
        const html = template.replace(/{{([^{}]*)}}/g, (placeholder, property) => {          
            return data[property] || placeholder;
        });

        done(null, html);
    })
}

module.exports = render;
