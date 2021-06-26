module.exports = (sequelize, DataTypes) => {
    const produtos = sequelize.define("produtos", {
    id_produto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_setor: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      slow_description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      value: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      photo: {
        type: DataTypes.STRING,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      is_active:{
        type: DataTypes.BOOLEAN,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
  
    });
  
  
  
    return produtos;
  
  };
  