const http = require('http');
const API_KEY = 'bff326045549e798386d2516ecfb6356';

function get(title, done) {    
    const req = http.get(`http://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${title}`, res => {
        if (res.statusCode !== 200) {
            done(new Error(`Error ${res.statusMessage} ${res.statusCode}`));
            res.resume();
            return;
        }
        
        res.setEncoding('utf-8');

        let body = '';

        res.on('data', data => body += data);

        res.on('end', () => {
            let result;
            try {
                result = JSON.parse(body);
                if (!result.total_results) {
                    done(new Error('No movies found'));
                }
            } catch (error) {
                done(error);
            }
            done(null, result);
        })
    });

    req.on('error', error => done(error));
}

module.exports = {
    get
};