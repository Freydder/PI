require("dotenv").config();
const axios = require("axios");
const { Dog } = require("../db");
const { API_PASSWORD } = process.env;
// const URL = `https://api.thedogapi.com/v1/breeds/`;
const URL = `https://api.thedogapi.com/v1/breeds/?api_key=${API_PASSWORD}`;

const getAllDogs = async () => {
  try {
    const { data: dogsFromAPI } = await axios(URL);
    const dogsFromDB = await Dog.findAll();
    const dogs = [...dogsFromAPI, ...dogsFromDB];
    return dogs;
  } catch (error) {
    console.error(error);
    throw new Error("Hubo un error al obtener las razas de perros");
  }
};

module.exports = getAllDogs;
