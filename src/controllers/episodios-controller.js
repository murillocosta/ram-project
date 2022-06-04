const Episodios = require("../models/episodios/index");
const { getResponse} = require("../utils/httpResponse");

class EpisodiosController {
  static async listTodosEpisodios(req, res) {
    try {
      const { page } = req.queryParams;
      const options = {
        params: {
          page: Number(page || 1),
        },
      };
      const episodios = await Episodios.listEpisodios(options);
      res.writeHead(200);
      res.end(JSON.stringify(episodios));
    } catch (error) {
      const { status, message} = getResponse(error)
      res.writeHead(status);
      res.end(message)
    }
  }

  static async listEpisodioPorNome(req, res) {
    try {
      const { name } = req.queryParams;
      const options = {
        params: {
          name: name,
        },
      };
      if (name === undefined) {
        res.writeHead(400);
        res.end('Name is required');
        return
      }
      const episodiosName = await Episodios.listEpisodios(options);
      res.writeHead(200);
      res.end(JSON.stringify(episodiosName));
    } catch (error) {
      const { status, message} = getResponse(error)
      res.writeHead(status);
      res.end(message)
    }
  }

  static async listEpisodiosPorTag(req, res) {
    try {
      const { episode } = req.queryParams;
     
      const options = {
        params: {
          episode: episode || undefined,
        },
      };
      if (episode === undefined) {
        res.writeHead(400);
        res.end('Episode is required');
        return
      }
      const tagEpisodio = await Episodios.listEpisodios(options);
      res.writeHead(200);
      res.end(JSON.stringify(tagEpisodio));
    } catch (error) {
      const { status, message} = getResponse(error)
      res.writeHead(status);
      res.end(message)
    }
  }
}

module.exports = EpisodiosController;
