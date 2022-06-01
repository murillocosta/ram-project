const rickandmortyapi = require("../../config/rickyandmorty-api");

class Locais {
  static  async lisLocais(options) {
    const {data} = await rickandmortyapi.get('/location', options)
    return data
  }
}

module.exports = Locais;