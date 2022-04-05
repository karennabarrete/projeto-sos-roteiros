const Roteiros = require("../models/Roteiros.js");
const Cidades = require ("../models/Cidades.js");
const Eventos = require ("../models/Eventos.js");

const roteirosController = {


    async buscarRoteiros(req,res) {
        try {
            const roteiros = await Roteiros.findByPk(req.params.id);
            if (req.query ["id_cidade"] && req.query ["dias"]){
                
                const roteiros = await Roteiros.findAll({where:{id_cidade:req.query ["id_cidade"],quantidade_dias:req.query["dias"] }});    
               
            }

            res.json (roteiros);
        } catch (error) {
            console.log(error);
        }

    },

    
    async listarRoteiros(req,res) {
        try {
            
            const roteiros = await Roteiros.findAll();
            res.json (roteiros);
        } catch (error) {
            console.log(error);
        }

    },

    async listarEventos(req,res) {
        try {
            const eventos = await Eventos.findAll({where: {id_roteiro: req.params.id}});
            res.json (eventos);
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