const Roteiros = require("../models/Roteiros.js");
const Cidades = require ("../models/Cidades.js");
const Eventos = require ("../models/Eventos.js");

const roteirosController = {

       
    async listarRoteiros(req,res) {
        try {
            let roteiros;
            if (req.query ["id_cidade"] && req.query ["dias"]){
                roteiros = await Roteiros.findAll({where:{id_cidades:req.query ["id_cidade"],quantidade_dias:req.query["dias"] }});    
            }
            else if (req.query ["id_cidade"] && !req.query ["dias"]){
                roteiros = await Roteiros.findAll({where:{id_cidades:req.query ["id_cidade"]}});    
            }
            else if (!req.query ["id_cidade"] && req.query ["dias"]){
                roteiros = await Roteiros.findAll({where:{quantidade_dias:req.query["dias"] }});    
            }
            else{
             roteiros = await Roteiros.findAll();
            }
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