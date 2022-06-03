const Personagens = require('../models/personagens');
const FileSystem = require('../models/FileSystem/')


class PersonagensController {
  static async listTodosPersonagens(req, res) {
    try {
      const { page } = req.queryParams;
      if (page && isNaN(page)) {
        throw {
          statusCode: 404,
          message: 'Page must be a number'
        }
      }
      const options = {
        params: {
          page: Number(page || 20)
        }
      }
      const personagens = await Personagens.listPersonagens(options);      
      res.writeHead(200);
      res.end(JSON.stringify(personagens));
    } catch (error) {
      res.writeHead(error.response.status || 500)
      res.end(JSON.stringify({ message: error.response.data['error'] || 'Server Error' }))
    }
  }
  
  static async listPersonagensPorNome(req, res) {
    try {
      const { name } = req.queryParams;
       if (!name) {
        throw {
           statusCode: 404,
           message: 'Name must be is required'
         }
       }
      
       const options = {
        params: {
          name: name
        }
      }
      const personagensName = await Personagens.listPersonagens(options);  
      
      const { results } = personagensName      
      await FileSystem.writeFile(results)
      
      res.writeHead(200);
      res.end(JSON.stringify(personagensName));

    } catch (error) {
      res.writeHead(error.response.status || 500)
      res.end(JSON.stringify({ message: error.response.data['error'] || 'Server Error' }))
    }
  }

  static async listPersonagensPorStatus(req, res) {
    try {
      const { status } = req.queryParams
      if (!['alive', 'dead'].includes(status)) {
        throw {
          statusCode: 404,
          message: 'Status must be dead or alive'
        }
      }
      const options = {
        params: {
          status: status
        }
      }
      const personagensStatus = await Personagens.listPersonagens(options);
      res.writeHead(200);
      res.end(JSON.stringify(personagensStatus));
    }
    catch (error) {
      res.writeHead(error.response.status || 500)
      res.end(JSON.stringify({ message: error.response.data['error'] || 'Server Error' }))
    }
  }

  static async listPersonagensPorGenero(req, res) {
    try {
      const { gender } = req.queryParams;
      if (!['female', 'male'].includes(gender)) {
        throw {
          statusCode: 404,
          message: 'Status must be female or male'
        }
      }
      const options = {
        params: {
          gender: gender
        }
      }
      const personagensGenero = await Personagens.listPersonagens(options)
      res.writeHead(200);
      res.end(JSON.stringify(personagensGenero));

    } catch (error) {
      res.writeHead(error.response.status || 500)
      res.end(JSON.stringify({ message: error.response.data['error'] || 'Server Error' }))
    }
  }

  static async listPersonagensPorId(req, res) {
    try {
      const { id } = req.queryParams
      if (id && isNaN(id)) {
        throw {
          statusCode: 404,
          message: 'Limit must be a number'
        }
      }
      const personagensId = await Personagens.listPersonagensId(id)

      const { resultsId } = personagensId      
      await FileSystem.writeFile(resultsId)
      
      res.writeHead(200);
      res.end(JSON.stringify(personagensId));
    } catch (error) {
      res.writeHead(error.response.status || 500)
      res.end(JSON.stringify({ message: error.response.data['error'] || 'Server Error' }))
    }
  }

  static async listPersonagensPorEspecie(req, res) {
    try {
      const { species } = req.queryParams;
      if (!species) {
        throw {
          statusCode: 404,
          message: 'Species must be text type'
        }
      }
      const options = {
        params: {
          species: species
        }
      }
      const personagensSpecies = await Personagens.listPersonagens(options);
      res.writeHead(200);
      res.end(JSON.stringify(personagensSpecies));

    } catch (error) {
      res.writeHead(error.response.status || 500)
      res.end(JSON.stringify({ message: error.response.data['error'] || 'Server Error' }))
    }
  }
  
}


module.exports = PersonagensController;