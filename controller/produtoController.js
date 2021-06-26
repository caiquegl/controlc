const Sequelize = require("sequelize");
const config = require("../config/database");
const cloudinary = require("cloudinary");
const {produtos, fotos} = require("../models");

const dataUpload = { 
    cloud_name: 'hmw10pfvu', 
    api_key: '264577131731318', 
    api_secret: 'P_dKq6VSHP2-0-ahQnA5LpJo5Mk' 
  }
const produtoController = {
    createProduto: async(req, res) => {
        const { nome, slow_description, value, description, id_setor, stock } = req.body;
        const files = req.files;
        const linksFotos = [];

        await files.forEach(element => {
          cloudinary.v2.uploader.upload(element.path, dataUpload,function(error, result) {
            linksFotos.push(result.url)
          });
        });

        const product = await produtos.create({
          nome,
          slow_description,
          value,
          description,
          id_setor,
          stock,
          photo: linksFotos[0],
          is_active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        })

        await linksFotos.forEach(async function(element){
          await fotos.create({
            id_produto: product.id_produto,
            photo: element,
            createdAt: new Date(),
            updatedAt: new Date(),
          })
        });       
    
      return res.redirect("pageAdmin");
    },
    activeProduct: async(req, res) => {
      const { id_product } = req.body;
     
      const product = await produtos.findOne({
          where:{
              id_product
          }
      })

      await produtos.update(
          {
              is_active: product.is_active ? false : true
          },
          {
          where:{
              id_product
          }
      })
     
  
        return res.redirect("pageAdmin");
  },
    

    

};

module.exports = produtoController;