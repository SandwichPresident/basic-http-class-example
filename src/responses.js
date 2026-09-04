const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);

const client2 = fs.readFileSync(`${__dirname}/../client/client2.html`);

const style = fs.readFileSync(`${__dirname}/../client/styles.css`);



const serveFile = (request, response, content, mimeType) => {
    response.writeHead(200, { 'Content-Type': mimeType });
    response.write(content);
    response.end();

};


// const sendPage = (request, response, page) => {

//     response.writeHead(200, {'Content-Type':'text/html'});
//     response.write(page);
//     response.end();

// }

const getMessage = (request, response) => {
    serveFile(request, response, 'Hello World', 'text/plain');
    // response.writeHead(200, { 'Content-Type': 'text/plain' });
    // response.write('Hello World');
    // response.end();
}


const getIndex = (request, response) => {
    serveFile(request, response, index, 'text/html');
    //sendPage(request, response, index);
};

const getClient = (request, response) => {
    serveFile(request, response, client2, 'text/html');
    //sendPage(request, response, client2);
};

const getCSS = (request, response) => {
    serveFile(request, response, style, 'text/css');
    // response.writeHead(200, {'Content-Type': 'text/css'});
    // response.write(style);
    // response.end();
};

module.exports = {
    getIndex,
    getClient,
    getMessage,
    getCSS,
    serveFile,
}




