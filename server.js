const express = require('express');
const app = express();
const port = 8000;

app.use(express.json()); // para poder recibir datos en formato JSON, funciones que se van a ejecutar antes de las funciones que coincidad con la peticion, parsea el json y transforma en objeto de js
app.get("/restaurantes/:id/:name", (req, response) => {
    console.log("Parametros:", req.params); // vamos a obtener los parametros de ruta
    response.json({Nombre: "Restaurante San Joser", direccion: "Ladron de guevara"});
})
app.get('/', function (req, res) {
    res.send('¡Hola Mundo!');
});
app.listen(port, function () {
    console.log('server.js escuchando en el siguiente puerto', port);
});