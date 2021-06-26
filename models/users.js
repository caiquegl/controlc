module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define("users", {
      id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      CPF: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
  
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nascimento: {
        type: DataTypes.DATE,
      },
      sexo: {
        type: DataTypes.BOOLEAN,
      },
      ofertas: {
        type: DataTypes.BOOLEAN,
      },
      is_active:{
        type: DataTypes.BOOLEAN,
      },
      master_user:{
       type: DataTypes.BOOLEAN,
     },
     telResidencial:{
       type: DataTypes.STRING,
     },
     telPhone:{
       type: DataTypes.STRING,
     },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
  
    });
  
  
  
    return users;
  
  };
  