//importar modulos
const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const port = 8080;
app.use(express.json());//insertar datos en la base de datos

//conectar base de datos
mongoose.connect('mongodb://localhost:27017/alumno');

//esquema base de datos
let alumnoSchema = new mongoose.Schema({
    nombre: String,
    fecha: String,
    modulo: String,
    grupo: String,
    ciclo: String,
    aula: Number
});
//aplicacion del esquema al modelo
let Alumno = mongoose.model('alumnos', alumnoSchema);
            
//obtener todos los libros disponibles
app.get('/alumnos', (req, res) => {
      Alumno.find().then(result =>{
        res.send(result);
    });
}); 
//obtener un documento dado el id
app.get('/alumnos/:id', (req, res) => {
     res.send('Id recibido ' + req.params.id);
    });
//insertar uno o varios documentos
app.post('/alumnos', (rep, res) =>{
    console.log("nombre: " + req.body.nombre);
    console.log("fecha: " + req.body.fecha);
    console.log("modulo: " + req.body.modulo);
    console.log("grupo: " + req.body.grupo);
    console.log("ciclo: " + req.body.ciclo);
    console.log("aula: " + req.body.aula);
    res.send();
})
 
// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
   }); 