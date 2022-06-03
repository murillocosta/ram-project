const rickandmortyapi = require("../../config/rickyandmorty-api");
const fs = require('fs')

class Personagens {
  static async listPersonagens(options) {
   const {data} = await rickandmortyapi.get('/character', options)
    return data
  }

  static async listPersonagensId(id){
    const {data} = await rickandmortyapi.
    get(`/character/${id}`)
    console.log(data)
    return data
  }

}

module.exports = Personagens;