const Menu = require("../controllers/menu.controller");

module.exports = function(app){
    app.post("/menu",Menu.createMenu);
}