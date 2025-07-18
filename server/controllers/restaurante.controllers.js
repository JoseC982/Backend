const { request } = require("express");
const Restaurante = require("../models/restaurante.model");
/*module.exports.createRestaurante = (request, response) => {
    const { nombre, direccion, tipo, reputacion, UrlImagen } = request.body;
    Restaurante.create({
        nombre, direccion, tipo, reputacion, UrlImagen
    })
        .then(restaurante => response.json(Restaurante))
        .catch(err => response.status(400).json(err));
}*/

// Crear un restaurante que no existe
module.exports.createRestauranteUnico = (request, response) => {
    Restaurante.findOne({ nombre: request.body.nombre })
        .then(restaurante => {
            console.log(restaurante);
            if (!restaurante) {
                const { nombre, direccion, tipo, reputacion, UrlImagen } = request.body;
                Restaurante.create({
                    nombre, direccion, tipo, reputacion, UrlImagen
                })
                    .then(restaurante => response.json(Restaurante))

            } else {
                return response.status(404).json({ error: "Ya existe un restaurante con ese nombre" });
            }

        })
        .catch(err => response.status(400).json(err));



}

module.exports.getAllRestaurantes = (_, response) => {
    Restaurante.find({})
        .then(rest => response.json(rest))
        .catch(err => response.json(err))
}

module.exports.getRestaurante = (request, response) => {
    Restaurante.findOne({ _id: request.params.id })
        .then(res => response.json(res))
        .catch(err => response.json(err))
}

//Obtener todos los restaurantes con reputacion entre 3 y 5
module.exports.getRestXIntervaloReputacion = (request, response) => {
    const repMin = parseInt(request.params.repMin);
    const repMax = parseInt(request.params.repMax);
    Restaurante.find({reputacion: { $gte: repMin, $lte: repMax}})
    .then(res => response.json(res))
    .catch(err => response.json(err))
}

module.exports.updateRestaurante = (request, response) => {
    Restaurante.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true }) //new: true trae la info del restaurante actualizado, en caso de que no pongamos new: true entonces trae el restaurante antes de actualizar
        .then(updRes => response.json(updRes))
        .catch(err => response.json(err))
}

module.exports.deleteRestaurante = (request, response) => {
    Restaurante.findOne({ _id: request.params.id })
        .then(restaurante => {
            if (!restaurante) {
                return response.status(404).json({ error: "Restaurante no encontrado" });
            }
            return Restaurante.deleteOne({ _id: request.params.id })
                .then(() => response.json(restaurante));
        })
        .catch(err => response.status(400).json(err));
}