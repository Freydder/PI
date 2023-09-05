require("dotenv").config();
const { API_PASSWORD } = process.env;
const { Temperaments } = require("../db");
const axios = require("axios");

const getAllTemperaments = async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.thedogapi.com/v1/breeds/?api_key=${API_PASSWORD}`
    );
    const temperamentsFromApi = response.data
      .filter((raza) => raza.temperament)
      .map((raza) => raza.temperament.split(",")) // Dividimos la cadena de temperamentos en un arreglo
      .flat() // "Aplanamos" el arreglo para obtener un arreglo plano de temperamentos, se utiliza después de map() para obtener un arreglo de temperamentos sin anidamientos.
      .map((temperament) => ({
        name: temperament.trim(), // Creamos un objeto para cada temperamento con la propiedad "name"
      }));

    // Utiliza un conjunto (Set) para eliminar duplicados
    const uniqueTemperaments = [...new Set(temperamentsFromApi)];

    // Consulta la base de datos para encontrar temperamentos existentes
    const existingTemperaments = await Temperaments.findAll({
      where: {
        name: uniqueTemperaments,
      },
    });

    // Filtra los temperamentos que no existen en la base de datos
    const newTemperaments = uniqueTemperaments.filter((temperament) => {
      return !existingTemperaments.some((existing) => existing.name === temperament); // some se utiliza para verificar si un temperamento ya existe en la base de datos
    });

    // Inserta solo los nuevos temperamentos en la base de datos
    await Temperaments.bulkCreate(
      newTemperaments.map((name) => ({ name }))
    );

    console.log("Temperamentos cargados correctamente en Base de Datos");

    return res.status(200).json(newTemperaments);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Error al cargar los temperamentos en la Base de Datos" });
  }
};

module.exports = getAllTemperaments;
