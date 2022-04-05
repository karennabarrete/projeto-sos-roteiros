const express = require("express");
const roteirosController = require ("../controllers/roteirosController");
const routes = express.Router();

routes.get ("/roteiros", roteirosController.listarRoteiros);
routes.get ("/eventos/:id", roteirosController.listarEventos);
routes.get ("/cidades", roteirosController.listarCidades);
routes.get ("/roteiros?cidade=:idcidade&dias", roteirosController.buscarRoteiros);

module.exports = routes; 
