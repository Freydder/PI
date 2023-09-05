const { Dog, Temperaments } = require("../db");

const createNewDog = async (
  name,
  imagen,
  height,
  weight,
  life_span,
  temperaments
) => {
  if (!name || !imagen || !height || !weight || !life_span || !temperaments) {
    throw Error("Falta información del perro.");
  }

  const newDog = await Dog.create({
    name,
    imagen,
    height,
    weight,
    life_span,
  });

  // Crear un array para almacenar los temperamentos asociados al perro
  const associatedTemperaments = [];

  // Iterar sobre los temperamentos y buscarlos en la base de datos
  for (const temperamentName of temperaments) {
    const foundTemperament = await Temperaments.findOne({
      where: { name: temperamentName },
    });

    if (foundTemperament) {
      associatedTemperaments.push(foundTemperament);
    }
  }

  await newDog.addTemperaments(associatedTemperaments);

  return newDog;
};

module.exports = createNewDog;