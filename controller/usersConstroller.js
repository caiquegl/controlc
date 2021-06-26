const Sequelize = require("sequelize");
const config = require("../config/database");
const {users} = require("../models");
const { check, validationResult, body } = require("express-validator")
const bcrypt = require("bcryptjs");

const userController = {
    createUser: async(req, res) => {
        const listaDeErrors = validationResult(req)
        const { email, password, Confirmpassword, telResidencial, tel, CPF, nome, nascimento, sexo, ofertas } = req.body;
        if(password != Confirmpassword){
            return res.render("cadastro", { passDif: ['Senhas diferentes'] })
        }
        const hashPassword = bcrypt.hashSync(password, 8);
        if (listaDeErrors.isEmpty()) {
          const usuario = await users.findAll({
            where: {
              email,
            }
          });
          if (!usuario.length < 1) {
            return res.render("cadastro", {
              msg: "Conta ja cadastrada",
            });
          } else {
            const user = await users.create({
              email,
              password: hashPassword,
              CPF,
              nome,
              nascimento,
              sexo,
              ofertas,
              is_active: true,
              master_user: false,
              telResidencial: telResidencial,
              telPhone: tel,
              createdAt: new Date(),
              updatedAt: new Date(),
            });
          }
    
          return res.redirect("login",{ usuario: req.session.usuario});
        } else {
          console.log('estou aqui'+listaDeErrors);
          return res.render("cadastro", { errors: listaDeErrors.errors, usuario: req.session.usuario })
        }
    },

    validateLogin: async(req, res) => {
        const { email, password } = req.body;
        const [usuario] = await users.findAll({
            where: {
              email,
            }
        });
        if (!usuario || !bcrypt.compareSync(password, usuario.password)) {
          return res.render("login", {
            msg: "Email ou senha errados!",
            usuario: req.session.usuario
          });
        }
        
        req.session.usuario = {
          id: usuario.id_usuario,
          nome: usuario.nome,
          email: usuario.email,
          CPF: usuario.CPF,
          nascimento: usuario.nascimento,
          sexo: usuario.sexo,
          userMaster: usuario.master_user,
          nascimento: usuario.nascimento,
        };
        
        return res.redirect("/");
    },
    logout: (req, res) => {
      req.session.destroy();
      return res.redirect("/");        
  },
};

module.exports = userController;