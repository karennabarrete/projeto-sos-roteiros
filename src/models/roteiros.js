const db = require("../database");
const { DataTypes } = require("sequelize");

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
        descricao_roteiro: {
            type: DataTypes.TEXT,
        },
        foto_principal:{
            type: DataTypes.STRING,
        },  
        quatidade_dias: {
            type: DataTypes.INTEGER,
        },
    }, 
    {
    tableName: "roteiros"
    }
);

module.exports = "Roteiros";