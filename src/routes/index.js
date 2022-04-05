const express = require("express");
const roteirosController = require ("/controllers/roteirosController.js");
//const roteirosController = require ("../controllers/roteirosController");
const routes = express.Router();

routes.get ("/roteiros", roteirosController.listarRoteiros);
routes.get ("/eventos/:id", roteirosController.listarEventos);
routes.get ("/cidades", roteirosController.listarCidades);

module.exports = routes; 
