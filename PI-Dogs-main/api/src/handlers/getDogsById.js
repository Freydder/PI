const getDogByID = require("../controller/getDogByID");

const getDogByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const dog = await getDogByID(id);
    res.status(200).json(dog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getDogByIdHandler;

