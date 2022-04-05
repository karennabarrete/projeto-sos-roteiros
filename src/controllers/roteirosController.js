const Roteiros = require("../models/Roteiros.js");
const Cidades = require ("../models/Cidades.js");

const roteirosController = {
    
    async listarRoteiros(req,res) {
        try {
            const roteiros = await Roteiros.findAll();
            res.json (roteiros);
        } catch (error) {
            console.log(error);
        }

    },

    async listarUmRoteiro(req,res) {
        try {
            const roteiros = await Roteiros.findByPk(req.params.id);
            if (!roteiros){
                res.json ("Deu ruim!")
            }
            res.json (roteiros);
        } catch (error) {
            console.log(error);
        }

    },

    async buscarRoteiros(req,res) {
        try {
            const roteiros = await Roteiros.findByPk(req.params.id);
            if (req.query ["cidade"] && req.query ["dias"]){
                res.json (roteiros)
            }
            else if (req.query ["cidade"] && !req.query ["dias"]){
                res.json (cidades)
            }
            else if (req.query ["dias"] && !req.query ["cidade"]){
                res.json (roteiros)
            }
            
            res.json (roteiros);
        } catch (error) {
            console.log(error);
        }

    },
    async listarCidades(req,res) {
        try {
            const cidades = await Cidades.findAll();
            res.json (cidades);
        } catch (error) {
            console.log(error);
        }

    },
};




module.exports = roteirosController;