const rickandmortyapi = require("../../config/rickyandmorty-api");


class Personagens {
  static async listPersonagens(options) {
    
    const {data} = await rickandmortyapi.get('/character', options)
    return data
  }
}

module.exports = Personagens;