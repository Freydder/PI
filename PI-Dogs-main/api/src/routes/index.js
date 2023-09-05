const { Router } = require("express");
const getDogs = require("../handlers/Dogs");
const getDogsName = require("../handlers/getDogsName");
const getDogByIdHandler = require("../handlers/getDogsById");
const getAllTemperaments = require("../controller/getAllTemperaments");
const postDogHandler = require("../handlers/postDogsHandler");

const routes = Router();

routes.get("/dogs", getDogs);
routes.get("/dogs/name", getDogsName);
routes.get("/dogs/:id", getDogByIdHandler);
routes.get("/temperaments", getAllTemperaments);
routes.post("/dogs", postDogHandler);

module.exports = routes;
