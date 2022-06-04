const Locais = require("../models/locais");
const { getResponse } = require("../utils/httpResponse");

class LocaisController {
  static async listLocaisPage(req, res) {
    try {
      const { page } = req.queryParams;
      const options = {
        params: {
          page: Number(page || 1),
        },
      };
      const listLocais = await Locais.lisLocais(options);
      res.writeHead(200);
      res.end(JSON.stringify(listLocais));
    } catch (error) {
      const { status, message } = getResponse(error);
      res.writeHead(status);
      res.end(message);
    }
  }
  static async listLocaisPorTipo(req, res) {
    try {
      const { type } = req.queryParams;
      const options = {
        params: {
          type: type || undefined,
        },
      };
      if (type === undefined) {
        res.writeHead(400);
        res.end("Type is required");
        return;
      }
      const listLocaisTipo = await Locais.lisLocais(options);
      res.writeHead(200);
      res.end(JSON.stringify(listLocaisTipo));
    } catch (error) {
      const { status, message } = getResponse(error);
      res.writeHead(status);
      res.end(message);
    }
  }
  static async listLocaisPorDimensao(req, res) {
    try {
      const { dimension } = req.queryParams;
      const options = {
        params: {
          dimension: dimension || undefined,
        },
      };
      if (dimension === undefined) {
        res.writeHead(400);
        res.end("Dimension is required");
        return;
      }
      const listLocaisDimensao = await Locais.lisLocais(options);
      res.writeHead(200);
      res.end(JSON.stringify(listLocaisDimensao));
    } catch (error) {
      const { status, message } = getResponse(error);
      res.writeHead(status);
      res.end(message);
    }
  }
  static async listLocaisPorNome(req, res) {
    try {
      const { name } = req.queryParams;
      const options = {
        params: {
          name: name || undefined,
        },
      };
      if (name === undefined) {
        res.writeHead(400);
        res.end("Name is required");
        return;
      }
      const listLocaisName = await Locais.lisLocais(options);
      res.writeHead(200);
      res.end(JSON.stringify(listLocaisName));
    } catch (error) {
      const { status, message } = getResponse(error);
      res.writeHead(status);
      res.end(message);
    }
  }
}

module.exports = LocaisController;
