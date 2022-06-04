const axios = require("axios").default;

const rickandmortyapi = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

module.exports = rickandmortyapi;
