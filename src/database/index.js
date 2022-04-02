const Sequelize = require ("sequelize");


const DB_NAME = "SOS Roteiros";
const DB_USER = "root";
const DB_PASS = "mysql";
const DB_CONFIG = {
    dialect: "mysql",
    host: "localhost",
    port: 4406,
};

let db = {};

try {
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
    console.error("Erro ao tentar uma conexão com o banco de dados");
}

async function hasConection (){
    try {
        await db.authenticate();
        console.log("Banco dados conectado!");
    } catch (error) {
        console.error("Erro ao tentar se conectar ao banco dados");
    }
}

Object.assign(db, {
    hasConection,
});

module.exports = db