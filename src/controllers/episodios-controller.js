const Episodios = require("../models/episodios/index");

class EpisodiosController {
  static async listTodosEpisodios(req, res) {
    try {
      const { page } = req.queryParams;
      if (page && isNaN(page)) {
        throw {
          statusCode: 404,
          message: "Page must be a number",
        };
      }
      const options = {
        params: {
          page: Number(page || 1),
        },
      };
      const episodios = await Episodios.listEpisodios(options);
      res.writeHead(200);
      res.end(JSON.stringify(episodios));
    } catch (error) {
      res.writeHead(error.response.status || 500)
      res.end(JSON.stringify({ message: error.response.data['error'] || 'Server Error' }))
    }
  }

  static async listEpisodioPorNome(req, res) {
    try {
      const { name } = req.queryParams;
      if (!name) {
        throw {
          statusCode: 404,
          message: "Name must be text type and is required",
        };
      }
      const options = {
        params: {
          name: name,
        },
      };
      const episodiosName = await Episodios.listEpisodios(options);
      res.writeHead(200);
      res.end(JSON.stringify(episodiosName));
    } catch (error) {
      res.writeHead(error.response.status || 500)
      res.end(JSON.stringify({ message: error.response.data['error'] || 'Server Error' }))
    }
  }

  static async listEpisodiosPorTag(req, res) {
    try {
      const { episode } = req.queryParams;
      if (!episode) {
        throw {
          statusCode: 404,
          message: "Episode by tag must be string type and is required",
        };
      }
      const options = {
        params: {
          episode: episode,
        },
      };
      const tagEpisodio = await Episodios.listEpisodios(options);
      res.writeHead(200);
      res.end(JSON.stringify(tagEpisodio));
    } catch (error) {
      res.writeHead(error.response.status || 500)
      res.end(JSON.stringify({ message: error.response.data['error'] || 'Server Error' }))
    }
  }
}

module.exports = EpisodiosController;
