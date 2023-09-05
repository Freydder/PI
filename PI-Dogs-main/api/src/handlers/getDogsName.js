const getAllDogs = require("../controller/getAllDogs");

const getDogsName = async (req, res) => {
  const nameQuery = req.query.name;

  if (!nameQuery) {
    return res
      .status(400)
      .json({ message: "Debe proporcionar un nombre para poder buscar" });
  }

  try {
    const dogs = await getAllDogs();
    const filteredDogs = dogs.filter((dog) =>
      dog.name.toLowerCase().includes(nameQuery.toLowerCase())
    );
    if (filteredDogs.length === 0) {
      return res
        .status(404)
        .json({ message: "No se encontraron razas de perros con ese nombre" });
    }
    res.json(filteredDogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Hubo un error al realizar la búsqueda por nombre" });
  }
};

module.exports = getDogsName;
