'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('fotos', { 
      id_photo:{
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      id_produto:{
        type: Sequelize.INTEGER,
        allowNull: false,
     },
      photo:{
        type: Sequelize.STRING,

      },
       createdAt: Sequelize.DATE,
       updatedAt: Sequelize.DATE,
       });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('fotos');

  }
};
