const rickandmortyapi = require("../../config/rickyandmorty-api");

class Episodios {
  static async listEpisodios(options) {
    const {data} = await rickandmortyapi.get("/episode", options);
    return data;
  }
}

module.exports = Episodios;
