const express = require("express");
const roteirosController = require ("../controllers/roteirosController.js");

const routes = express.Router();

routes.get ("/roteiros", roteirosController.listarRoteiros);
routes.get ("/roteiro/:id*", roteirosController.listarEventos);
routes.get ("/cidades", roteirosController.listarCidades);

module.exports = routes; 
