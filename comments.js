const http = require('http');
const fs = require('fs');

// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file
// when someone visits http://localhost:3000/comments.

// The comments.html file should contain a form that allows users to submit comments.
// The form should have a textarea for the comment and a submit button.
const server = http.createServer((req, res) => {
    if (req.url === '/comments' && req.method === 'GET') {
        fs.readFile('/path/to/comments.html', 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Internal Server Error');
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            }
        });
    } else if (req.url === '/comments' && req.method === 'POST') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        });
        req.on('end', () => {
            // Process the comment and save it to a database or file
            // ...
            res.statusCode = 200;
            res.end('Comment submitted successfully');
        });
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
