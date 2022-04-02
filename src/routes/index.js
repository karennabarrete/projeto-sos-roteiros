const express = require("express");
const roteirosController = require ("../controllers/roteirosController");
const routes = express.Router();

routes.get ("/roteiros", roteirosController.listarRoteiros);
routes.get ("/roteiros/:id", roteirosController.listarUmRoteiro);
routes.get ("/cidades", roteirosController.exibirCidade);

module.exports = routes; 
