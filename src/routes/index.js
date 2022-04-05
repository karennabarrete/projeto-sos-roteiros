const express = require("express");
const roteirosController = require ("../controllers/roteirosController");
const routes = express.Router();

routes.get ("/roteiros", roteirosController.listarRoteiros);
routes.get ("/roteiro/:id", roteirosController.listarUmRoteiro);
routes.get ("/roteiros?cidade=:idcidade&dias", roteirosController.buscarRoteiros);

module.exports = routes; 
