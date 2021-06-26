const Sequelize = require("sequelize");
const config = require("../config/database");
const {produtos, setores, fotos} = require("../models");






const bodyController = {
    home: async(req, res) => {
        return res.render("index", {title: 'Home', usuario: req.session.usuario});
    },

    produtos: async(req, res) => {
      const {setor, page} = req.query
      const sector = await setores.findAll({
        where: {
          is_active: true
        }
      })

      let pagination = {
        page: page ? parseInt(page)  : 1,
        total:1,
        setor: parseInt(setor) > 0 ? parseInt(setor) : sector[0].id_setor
      }

      const productCount = await produtos.count({
        where:{
          id_setor:setor ? parseInt(setor) : sector[0].id_setor
        }
      })

      pagination.total = Math.ceil(productCount / 10)

      const produto = await produtos.findAll({
        where:{
          id_setor:setor ? parseInt(setor) : sector[0].id_setor
        },
        offset: (parseInt(page) - 1) * 10,
        limit: 10
      })

      console.log((parseInt(page) - 1) * 10)
      return res.render("produtos", {title: 'Produtos', usuario: req.session.usuario, setor: sector, produto, pagination});
    },

    infoProdutos: async(req, res) => {
      const {id} = req.query
      const produto = await produtos.findOne({
        where:{
          id_produto:id
        }
      })

      const foto = await fotos.findAll({
        where:{
          id_produto: id
        }
      })

      return res.render("infoProdutos", {title: 'Info produtos', usuario: req.session.usuario, produto, foto});
    },
    faleConosco: async(req, res) => {
      return res.render("faleConosco", {title: 'False Conosco', usuario: req.session.usuario});
    },
    cadastro: async(req, res) => {
      return res.render("cadastro", {title: 'Cadastro',usuario: req.session.usuario});
    },
    login: async(req, res) => {
      return res.render("login", {title: 'Login', usuario: req.session.usuario});
    },
    infoClient: async(req, res) => {
      return res.render("cliente", {title: 'Cliente', usuario: req.session.usuario});
    },
    pageAdmin: async(req, res) => {
      const setor = await setores.findAll()
      const produto = await produtos.findAll()
      return res.render("adm", {title: 'Cliente', usuario: req.session.usuario, setor, produto});
    },
};

module.exports = bodyController;