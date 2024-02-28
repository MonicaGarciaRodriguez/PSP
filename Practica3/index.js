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
app.post('/alumnos', (req, res) =>{
    let alumn = new Alumno({
        nombre: req.body.nombre,
        fecha: req.body.fecha,
        modulo: req.body.modulo,
        grupo: req.body.grupo,
        ciclo: req.body.ciclo,
        aula: req.body.aula
    });
    alumn.save().then(
        result => {
            console.log("Alumno añadido: ", result );
            res.send();
        }
    ).catch(
        error => {
            console.log("Error al añadir alumno", error);
        }
    )
});
//Obtener todos los documentos que cumplan dos condiciones: 
//todos los del modulo DAM y ciclo presencial
app.get('/alumnos', (req, res) =>{
    Alumno.find({$and:[{modulo: "DAM"}, {ciclo: "Presencial"}]}).then(
        result => {
            console.log("El resultado es: ", result);
            res.send(result);
        }
    ).catch(
        error => {
            console.log("Error: ", error)
        } 
    )
});
//Actualizar un documento
app.put('/alumnos/:id', (req, res) =>{
    Alumno.findByIdAndUpdate(req.params.id,
        {$set:{
            nombre: req.body.nombre,
            fecha: req.body.fecha,
            modulo: req.body.modulo,
            grupo: req.body.grupo,
            ciclo: req.body.ciclo,
            aula: req.body.aula
        } }, {new: true}).then(
        result => {
            console.log("Documento actualizado", result);
            res.send();
        }
    ).catch(
        error => {
            console.log("Error:", error);
        }
    )
});

//eliminar un documento dado su id
app.delete('/alumnos/:id', (req, res) =>{
    Alumno.findByIdAndDelete(req.params.id).then(
        result => {
            console.log("Documento eliminado", result);
            res.send();
        }
    ).catch(
        error => {
            console.log("Error:", error);
        }
    )
});
 
// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
   }); 
