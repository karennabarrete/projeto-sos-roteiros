const Roteiros = require("../models/Roteiros.js");
//import Product from "../models/Roteiros.js";

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
};




module.exports = roteirosController;