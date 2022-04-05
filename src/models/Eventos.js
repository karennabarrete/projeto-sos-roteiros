const db = require("../database");
const { DataTypes } = require("sequelize");
const Roteiros = require("Roteiros");


const Eventos = db.define(
    "Eventos", 
    {
        id_eventos: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        dia: {
            type: DataTypes.INTEGER,
        },
        nome_eventos: {
            type: DataTypes.STRING,
        },
        foto_eventos:{
            type: DataTypes.STRING,
        },  
        hora: {
            type: DataTypes.TIME,
        },
        descricao_eventos: {
            type: DataTypes.TEXT,
        },
        duracao: {
            type: DataTypes.STRING,
        },
        endereco: {
            type: DataTypes.STRING,
        },
        percurso: {
            type: DataTypes.STRING,
        },
        id_roteiro: {
            type: DataTypes.INTEGER,
            references: {
                model: Roteiros,
                key: 'id',
            }},
    },{ 
    
        tableName: "eventos",
        timestamps: false,
    }
);


module.exports = Eventos;