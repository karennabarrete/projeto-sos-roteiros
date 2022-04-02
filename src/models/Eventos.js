const db = require("../database");
const { DataTypes } = require("sequelize");

const Eventos = db.define(
    "Eventos", 
    {
        id_eventos: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome_eventos: {
            type: DataTypes.STRING,
        },
        descricao_eventos: {
            type: DataTypes.TEXT,
        },
        foto_eventos:{
            type: DataTypes.STRING,
        },  
        dia: {
            type: DataTypes.INTEGER,
        },
        hora: {
            type: DataTypes.TIME,
        },
        duracao: {
            type: DataTypes.FLOAT,
        },
    }, 
    {
    tableName: "eventos",
    timestamps: false,
    }
);

module.exports = Eventos;