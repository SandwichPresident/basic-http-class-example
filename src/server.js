const http = require('http');
const responses = require('./responses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;



const onRequest = (request, response) => {
    console.log(request.url);
    responses.getIndex(request, response);
};

http.createServer(onRequest).listen(port, ()=>{
    console.log(`Listening on 127.0.0.1:${port}`);

});