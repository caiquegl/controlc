const Sequelize = require("sequelize");
const config = require("../config/database");
const {Pedido,produtos,enderecos,carrinhos,mapas} = require("../models");






const bodyController = {
    home: async(req, res) => {
        return res.render("index", {title: 'Home'});
    },

    produtos: async(req, res) => {
      return res.render("produtos", {title: 'Produtos'});
    },

    infoProdutos: async(req, res) => {
      return res.render("infoProdutos", {title: 'Info produtos'});
    },
    faleConosco: async(req, res) => {
      return res.render("faleConosco", {title: 'False Conosco'});
    },
};

module.exports = bodyController;