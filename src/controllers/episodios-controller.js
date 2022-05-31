const Personagens = require('../models/personagens');

class PersonagensController {

  static async listTodosPersonagens(req, res) {

    try {
      const { page } = req.queryParams;
      if (page && isNaN(page)) {
        throw {
          statusCode: 404,
          message: 'Limit must be a number'
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
      res.writeHead(error.statusCode || 500)
      res.end(JSON.stringify({ message: error.message || 'Server Error' }))
    }

  }
}

module.exports = PersonagensController;