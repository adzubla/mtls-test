const https = require('https');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const options = {
    ca: fs.readFileSync('ca.crt'),
    cert: fs.readFileSync('bob_server.crt'),
    key: fs.readFileSync('bob_server.key'),
    rejectUnauthorized: true,
    requestCert: true,
};

const server = https.createServer(options, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Welcome to Bob's server!");
});

server.listen(port, hostname, () => {
    console.log(`Server running at https://${hostname}:${port}/`);
});
