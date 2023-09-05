const createNewDog = require("../controller/postDogs");

const postDogHandler = async (req, res) => {
  try {
    const { name, imagen, height, weight, life_span, temperaments } = req.body;

    const newDog = await createNewDog(
      name,
      imagen,
      height,
      weight,
      life_span,
      temperaments
    );

    res.status(201).json(newDog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postDogHandler;
