const roteirosController = {
    listarRoteiros(req,res) {
        res.json ("Lista de Roteiros");
    },

    listarUmRoteiro(req,res){
        res.json ("Aqui está seu roteiro");
    },

    exibirCidade(req,res) {
        res.json("Nessa cidade temos esses roteiros")
    },

};

module.exports = roteirosController;