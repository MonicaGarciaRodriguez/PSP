
//importar modulo fs para leer un archivo
const fs = require('fs').promises;

//importar modulo hhtp
const http = require("http");
const host = 'localhost';
const port = 8000;


const path = require('path');
let valor;
function funcion(parametro) {
    if (parametro == ".html") {
        valor = "text/html";
    }
    if (parametro == ".css") {
        valor = "text/css";
    }
}

const server = http.createServer((request, response) => {

    if (request.url == '/index.html') {
        return fs.readFile('./index.html')
            .then(contents => {
                parametro = path.extname(request.url);
                funcion(parametro);
                console.log("Se ha producido una petición");
                console.log("URL: " + request.url);
                console.log("Método: " + request.method);
                console.log("El Content-Type: " + valor);
                response.writeHead(200);
                response.end(contents);
            })
            .catch(err => {
                response.writeHead(404);
                response.end(err);
                return;
            });
    };
    if (request.url == '/Pagina1.html') {
        return fs.readFile('./Pagina1.html')
            .then(contents => {
                parametro = path.extname(request.url);
                funcion(parametro);
                console.log("Se ha producido una petición");
                console.log("URL: " + request.url);
                console.log("Método: " + request.method);
                console.log("El Content-Type: " + valor);
                response.writeHead(200);
                response.end(contents);

            })
            .catch(err => {
                response.writeHead(404);
                response.end(err);
                return;
            });
    };
    if (request.url == '/Pagina2.html') {
        return fs.readFile('./Pagina2.html')
            .then(contents => {
                parametro = path.extname(request.url);
                funcion(parametro);
                console.log("Se ha producido una petición");
                console.log("URL: " + request.url);
                console.log("Método: " + request.method);
                console.log("El Content-Type: " + valor);
                response.writeHead(200);
                response.end(contents);

            })
            .catch(err => {
                response.writeHead(404);
                response.end(err);
                return;
            });
    };
    if (request.url == '/Logo.jpg') {
        return fs.readFile('./Logo.jpg')
            .then(contents => {
                response.setHeader("Content-Type", "text/html");
                response.writeHead(200);
                response.end(contents);

            })
            .catch(err => {
                response.writeHead(404);
                response.end(err);
                return;
            });
    };
    if (request.url == '/style.css') {
        return fs.readFile('./style.css')
            .then(contents => {
                parametro = path.extname(request.url);
                funcion(parametro);
                console.log("Se ha producido una petición");
                console.log("URL: " + request.url);
                console.log("Método: " + request.method);
                console.log("El Content-Type: " + valor);
                response.writeHead(200);
                response.end(contents);

            })
            .catch(err => {
                response.writeHead(404);
                response.end(err);
                return;
            });
    };


});

server.listen(port, host, () => {
    console.log(`Servidor ejecutando en http://${host}:${port}`);
});

