module.exports = (sequelize, DataTypes) => {
    const fotos = sequelize.define("fotos", {
        id_photo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_produto: {
        type: DataTypes.INTEGER,
      },
      photo: {
        type: DataTypes.STRING,
      },

      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
  
    });
  
  
  
    return fotos;
  
  };
  