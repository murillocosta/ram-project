const Personagens = require('../models/personagens');
const FileSystem = require('../models/FileSystem/')


class PersonagensController {
  static async listTodosPersonagens(req, res) {
    try {
      const { page } = req.queryParams;
      const options = {
        params: {
          page: Number(page || 1)
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
      
       const options = {
        params: {
          name: name || undefined,
        }
      };
      if (name === undefined) {
        res.writeHead(400);
        res.end('Name is required');
        return;
      }
      const personagensName = await Personagens.listPersonagens(options);  
                  
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
        res.writeHead(400);
        res.end('Status must be dead or alive and is require');
        return;
        
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
        res.writeHead(400);
        res.end('Gender must be female or male and is require');
        return;
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
      if (!id) {
        res.writeHead(400);
        res.end('Id is required');
        return;
      }
      const personagensId = await Personagens.listPersonagensId(id)
           
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
     
      const options = {
        params: {
          species: species || undefined,
        }
      };
      if (species === undefined) {
        res.writeHead(400);
        res.end('Species is required');
        return;
      }
      const personagensSpecies = await Personagens.listPersonagens(options);
      res.writeHead(200);
      res.end(JSON.stringify(personagensSpecies));

    } catch (error) {
      res.writeHead(error.response.status || 500)
      res.end(JSON.stringify({ message: error.response.data['error'] || 'Server Error' }))
    }
  }

  static async listPersonagensPorOrigem(req, res) {
    try {
      const { origin } = req.queryParams;
      const personagensOrigem = await Personagens.listPersonagensPorOrigem()
      const resultados = personagensOrigem['results']
     
      const filtro = resultados.filter((char) => {
        return char['origin']['name'] == origin
      })

      if(filtro.length === 0) {
        res.writeHead(400);
        res.end('No search answer found, enter a valid name, origin name is required');
        return
      }
      res.writeHead(200);
      res.end(JSON.stringify(filtro));
    } catch (error) {
      res.writeHead(error.response.status || 500)
      res.end(JSON.stringify({ message: error.response.data['error'] || 'Server Error' }))
    }
  }

  static async createPersonagensPorNome(req, res) {
    try {
      const { name } = req.queryParams;
      
       const options = {
        params: {
          name: name || undefined,
        }
      };
      if (name === undefined) {
        res.writeHead(400);
        res.end('Name is required');
        return;
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
  
}


module.exports = PersonagensController;