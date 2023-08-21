const { DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("dog", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    imagen: {
      type: DataTypes.BLOB,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    altura: {
      type: DataTypes.FLOAT,
      validate: {
        min: 0,
      },
    },
    peso: {
      type: DataTypes.FLOAT,
      validate: {
        min: 0,
      },
    },
    años_de_vida: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
      },
    },
  });
};
