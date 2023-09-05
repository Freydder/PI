const getAllDogs = require("./getAllDogs");

const getDogByID = async (id) => {
  try {
    const dogs = await getAllDogs();
    const dog = dogs.find((e) => e.id == id);
    if (!dog) {
      throw new Error("Raza no encontrada");
    }
    return dog;
  } catch (error) {
    throw new Error("Hubo un error al obtener el detalle de la raza");
  }
};

module.exports = getDogByID;
