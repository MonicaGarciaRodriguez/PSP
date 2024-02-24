
//importar modulo fs para leer un archivo
const fs = require('fs/promises');
//importar modulo hhtp
const http = require("http");
const host = 'localhost';
const port = 8000;
const path = require('path');
//importar la funcion 
const {obtenerparametro}   = require("./obtenerparametro.js");
//crear el servidor
const server = http.createServer((request, response) => {
    //obtener mi url
    const miURL = '.' + request.url;
    //leer el archivo
    fs.readFile(miURL)
        .then(datos => {
            //obtener la extension del archivo
            const fichero = path.extname(miURL);
            //obtener el content-type utilizando un propio modulo
            const contentType = obtenerparametro(fichero);
            //imprimir informacion en la consola
            console.log("Se ha producido una petición");
            console.log("URL: " + miURL);
            console.log("Método: " + request.method);
            console.log("El Content-Type: " + contentType);
            //enviar respuesta 
            response.writeHead(200);
            response.end(datos);
        })
        .catch((error) => {
            console.error(error);
            response.writeHead(404, {'Content-Type': 'text/html'});
            response.end('404 No encontrado');
        });

    }); 

server.listen(port, host, () => {
    console.log(`Servidor ejecutando en http://${host}:${port}`);
});
