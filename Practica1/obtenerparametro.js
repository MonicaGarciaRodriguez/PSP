function obtenerparametro(parametro) {
    const parametros = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.jpg': 'image/jpg',
    }

    return parametros[parametro];
}

module.exports = {
    obtenerparametro
};