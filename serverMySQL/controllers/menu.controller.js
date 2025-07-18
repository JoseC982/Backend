const Menu = require("../models/menu.model");
const TipoComida = require('../models/tipoComida.model');
const Restaurante = require('../models/restaurante.model');

// crear un registro en la tabla menu
module.exports.createMenu = async(req,res) => {
    try{
        const { menuDate, RestauranteId, TipoComidaId} = req.body;
        const menu = await Menu.create({menuDate, RestauranteId, TipoComidaId});
        res.json(menu);
    } catch (err) {
        res.status(500).json({msg: "Ocurrio un problema al crear un menu"});
    }
}

//Permita obtener los tipos de comida que ofrece un restaurante por id
