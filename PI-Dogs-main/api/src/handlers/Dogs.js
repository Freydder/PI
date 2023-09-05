const getAllDogs = require("../controller/getAllDogs");

const getDogs = async (req, res) => {
  try {
    const dogs = await getAllDogs();
    console.log(dogs);
    res.json(dogs);
  } catch (error) {
    console.error(error);
    res.status(500).send("Hubo un error al obtener las razas de perros");
  }
};

module.exports = getDogs;
