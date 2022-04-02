const db = require("../database");
const { DataTypes } = require("sequelize");

const Cidades = db.define(
    "Cidades", 
    {
        id_cidade: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome_cidade: {
            type: DataTypes.STRING,
        },
                
    }, 
    {
    tableName: "cidades"
    }
);

module.exports = "Cidades";