const db = require("../database");
const { DataTypes } = require("sequelize");
const Cidades = require("Cidades");

const Roteiros = db.define(
    "Roteiros", 
    {
        id_roteiro: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome_roteiro: {
            type: DataTypes.STRING,
        },
        descricao_resumida: {
            type: DataTypes.STRING,
        },
        foto_principal:{
            type: DataTypes.STRING,
        },  
        quantidade_dias: {
            type: DataTypes.INTEGER,
        },
        id_cidades: {
            type: DataTypes.INTEGER,
            references: {
                model: Cidades,
                key: 'id',
        }},
        
        
    },{ 
    
    tableName: "roteiros",
    timestamps: false,
    }
);

module.exports = Roteiros;