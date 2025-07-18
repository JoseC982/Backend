//es un esquema de la coleccion que voy a crear en la BDD
const mongoose = require('mongoose');

const RestauranteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "El nombre es requerido"]
    },
    direccion: {
        type: String,
        required: [true, "La dirección es requerida"]
    },
    tipo: {
        type: String,
        required: [true, "El tipo es requerido"]
    },
    reputacion: {
        type: Number,
        required: [true, "La reputación es requerida"],
        min: [1, "La reputación mínima es 1"],
        max: [5, "La reputación máxima es 5"]
    },
    UrlImagen: {
        type: String,
        required: [true, "La URL de la imagen es requerida"]
    }
}, { timestamps: true });

const Restaurante = mongoose.model('Restaurante', RestauranteSchema);
module.exports = Restaurante;