const http = require('http')

const postOptions = {
    hostname: 'localhost',
    port: 8080,
    path: '/',
    method: 'POST',
    headers: {
        'name': 'Radimir',
        'IKnowYourSecret': 'TheOwlAreNotWhatTheySeem'
    }
};

const postRequest = http.request(postOptions, res => {
    console.log(`Secret is: ${postOptions.headers.IKnowYourSecret}`)
});

postRequest.on('error', error => {
    console.error(error);
});

postRequest.end();
