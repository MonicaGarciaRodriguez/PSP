
//importar modulo fs para leer un archivo
const fs = require('fs').promises;

const http = require("http");
const host = 'localhost';
const port = 8000;

const requestListener = function (request, response){
    console.log("Se ha producido una petición")
    let miURL = new URL(`http://${host}:${request.url}`);
    console.log("URL: " + miURL)
    console.log("Método: " + request.method)
    console.log("Algunos campos de la cabecera:")
    console.log("Host: " + request.headers['host'])
    console.log("User-Agent: " + request.headers['user-agent'])
    console.log("Accept-Language: " + request.headers['accept-language'])
    fs.readFile('./index.html')
            .then(contents => {
                response.setHeader("Content-Type", "text/html");
                response.writeHead(200);
                console.log(miURL)
                response.end(contents);
                
                })
                .catch(err => {
                    response.whiteHead(500);
                    response.end(err);
                    return;
                });
    };

    const server = http.createServer (requestListener);  
        server.listen(port, host, () => {
        console.log(`Servidor ejecutando en http://${host}:${port}`);
    });
    
    

//indicamos las rutas
/*const routes =  {
    '/': (request, response) => {
        let archivoIndex = fs.readFile('./index.html');
        response.setHeader('Context-Type','text/html');
        response.writeHead(200);
        response.end(archivoIndex);
    },
    '/html': (request, response) => {
        let archivo1 = fs.readFile('./Pagina1.html');
        response.setHeader('Context-Type','text/html');
        response.writeHead(200);
        response.end(archivo1);
    },
    '/html': (request, response) => {
        let archivo2 = fs.readFile('./Pagina2.html');
        response.setHeader('Context-Type','text/html');
        response.writeHead(200);
        response.end(archivo2);
    }

};*/

/*const routes = (err, data) => {
    if (request.url == 'index.html'){
        let archivoIndex = fs.readFile('./index.html');
        response.setHeader('Context-Type','text/html');
        response.writeHead(200);
        response.end(archivoIndex);
    }
    else
    if (request.url == 'Pagina1.html'){
        let archivo1 = fs.readFile('./Pagina1.html');
        response.setHeader('Context-Type','text/html');
        response.writeHead(200);
        response.end(archivo1);
    }
    else
    if (request.url == 'Pagina2.html'){
        let archivo1 = fs.readFile('./Pagina2.html');
        response.setHeader('Context-Type','text/html');
        response.writeHead(200);
        response.end(archivo2);
    }
};*/

