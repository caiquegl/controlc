'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('setores', { 
      id_setor:{
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         },
       nome:{
         type: Sequelize.STRING,
         allowNull: false,
 
       },
       is_active:{
        type: Sequelize.BOOLEAN,
       },
       createdAt: Sequelize.DATE,
       updatedAt: Sequelize.DATE,
       });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('setores');

  }
};
