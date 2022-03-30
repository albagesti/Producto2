const http = require("http");

const hostname = 'localhost';
const port = 8000;


const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("Hola!");
};

const server = http.createServer(requestListener);
server.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`);
});