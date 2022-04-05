const Sequelize = require ("sequelize");

const DB_NAME = "heroku_4d7881706d9fbe3";
const DB_USER = "b3473571ba5134";
const DB_PASS = "c807d335";
const DB_CONFIG = {
    dialect: "mysql",
    host: "us-cdbr-east-05.cleardb.net",
    port: 3306,
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