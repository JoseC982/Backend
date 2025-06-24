const express = require('express');
const app = express();
const port = 8000;
app.get("/restaurantes", (request, response) => {
    response.json({Nombre: "Restaurante San Joser", direccion: "Ladron de guevara"});
})
app.get('/', function (req, res) {
    res.send('¡Hola Mundo!');
});
app.listen(port, function () {
    console.log('server.js escuchando en el siguiente puerto', port);
});