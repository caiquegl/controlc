module.exports = (sequelize, DataTypes) => {
    const setores = sequelize.define("setores", {
      id_setor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
  
  
  
    return setores;
  
  };
  