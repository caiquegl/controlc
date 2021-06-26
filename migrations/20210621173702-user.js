'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', { 
      id_usuario:{
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         },
       password:{
         type: Sequelize.STRING,
         allowNull: false,
       },
       email:{
         type: Sequelize.STRING,
         allowNull: false,
         unique: true,
       },
       CPF:{
         type: Sequelize.STRING,
         allowNull: false,
         unique: true,
       },
       nome:{
         type: Sequelize.STRING,
         allowNull: false,
 
       },
       nascimento:{
         type: Sequelize.DATE,
       },
       sexo:{
         type: Sequelize.BOOLEAN,
       },
       ofertas:{
         type: Sequelize.BOOLEAN,
       },
       is_active:{
         type: Sequelize.BOOLEAN,
       },
       master_user:{
        type: Sequelize.BOOLEAN,
      },
      telResidencial:{
        type: Sequelize.STRING,
      },
      telPhone:{
        type: Sequelize.STRING,
      },
       createdAt: Sequelize.DATE,
       updatedAt: Sequelize.DATE,
       });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');

  }
};
