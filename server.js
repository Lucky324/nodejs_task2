const http = require('http');
const fs = require('fs');
const port = 8080;
const users_logs = 'users_logs.json';

const requestHandler = (request, response) => {
    let logs = JSON.parse(fs.readFileSync(users_logs, 'utf-8'));
    if (request.method === 'POST') {
        if (request.headers.iknowyoursecret === 'TheOwlAreNotWhatTheySeem') {
            logs.push({name: request.headers.name, ip: request.connection.remoteAddress});
            fs.writeFile(users_logs, JSON.stringify(logs), (err) => {
                if (err) {
                    throw err;
                }
            });
            console.log(`Hello, ${request.headers.name}`);
        } else {
            console.log(`Nope!`);
        }
    }

    response.end();
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        return console.log('The exception happened: ', err);
    }

    console.log(`Server listening on port ${port}`);
});
