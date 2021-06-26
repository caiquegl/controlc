const Sequelize = require("sequelize");
const config = require("../config/database");
const {setores} = require("../models");

const setorController = {
    createSetor: async(req, res) => {
        const { nome } = req.body;
       
            const setor = await setores.create({
                nome,
                is_active: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            });
       
    
          return res.redirect("pageAdmin");
    },
    activeSetor: async(req, res) => {
        const { id_setor } = req.body;
       
        const setor = await setores.findOne({
            where:{
                id_setor
            }
        })

        await setores.update(
            {
                is_active: setor.is_active ? false : true
            },
            {
            where:{
                id_setor
            }
        })
       
    
          return res.redirect("pageAdmin");
    },

    

};

module.exports = setorController;