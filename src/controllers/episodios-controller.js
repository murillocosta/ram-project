const Episodios = require("../models/episodios/index");
const { getResponse, setResponse } = require("../utils/httpResponse");

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
      res.writeHead(error.response.status || 500);
      res.end(
        JSON.stringify({
          message: error.response.data["error"] || "Server Error",
        })
      );
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
      res.writeHead(error.response.status || 500);
      res.end(
        JSON.stringify({
          message: error.response.data["error"] || "Server Error",
        })
      );
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
      res.writeHead(error.response.status || 500);
      res.end(
        JSON.stringify({
          message: error.response.data["error"] || "Server Error",
        })
      );
    }
  }
}

module.exports = EpisodiosController;
