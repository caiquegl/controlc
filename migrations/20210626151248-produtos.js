'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('produtos', { 
      id_produto:{
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      id_setor:{
        type: Sequelize.INTEGER,
        allowNull: false,
     },
       nome:{
         type: Sequelize.STRING,
         allowNull: false,
 
       },
       slow_description:{
        type: Sequelize.STRING,
        allowNull: false,

      },
      description:{
        type: Sequelize.STRING,
        allowNull: false,

      },
      value:{
        type: Sequelize.STRING,
        allowNull: false,

      },
      stock:{
        type: Sequelize.INTEGER,
        allowNull: false,

      },
      photo:{
        type: Sequelize.STRING,
      },
       is_active:{
        type: Sequelize.BOOLEAN,
       },
       createdAt: Sequelize.DATE,
       updatedAt: Sequelize.DATE,
       });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('produtos');

  }
};
