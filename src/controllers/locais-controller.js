const Locais = require('../models/locais')

class LocaisController {
  static async listLocaisPage(req,res){
    try {
      const { page } = req.queryParams;
      const options = {
        params: {
          page: Number(page || 1)
        }
      }
      const listLocais = await Locais.lisLocais(options);
      res.writeHead(200);
      res.end(JSON.stringify(listLocais));
    } catch (error) {
      res.writeHead(error.response.status || 500)
      res.end(JSON.stringify({ message: error.response.data['error'] || 'Server Error' }))
    }
  }
  static async listLocaisPorTipo(req,res){
    try {
      const { type } = req.queryParams;
      if(!type){
        throw {
          statusCode: 400,
          message: 'Type must be text type and is require'
        }
    }
      const options = {
        params: {
          type: type
        }
      }
      const listLocaisTipo = await Locais.lisLocais(options);
      res.writeHead(200);
      res.end(JSON.stringify(listLocaisTipo));
    } catch (error) {
      res.writeHead(error.response.status || 500)
      res.end(JSON.stringify({ message: error.response.data['error'] || 'Server Error' }))
    }
  }
  static async listLocaisPorDimensao(req,res){
    try {
      const { dimension } = req.queryParams;
      if(!dimension){
        throw {
          statusCode: 400,
          message: 'Dimension must be text type and is require'
        }
    }
      const options = {
        params: {
          dimension: dimension
        }
      }
      const listLocaisDimensao = await Locais.lisLocais(options);
      res.writeHead(200);
      res.end(JSON.stringify(listLocaisDimensao));
    } catch (error) {
      res.writeHead(error.response.status || 500)
      res.end(JSON.stringify({ message: error.response.data['error'] || 'Server Error' }))
    }
  }
  static async listLocaisPorNome(req,res){
    try {
      const { name } = req.queryParams;
      if(!name){
          throw {
            statusCode: 400,
            message: 'Name must be text type and is require'
          }
      }
      const options = {
        params: {
          name: name
        }
      }
      const listLocaisName = await Locais.lisLocais(options);
      res.writeHead(200);
      res.end(JSON.stringify(listLocaisName));
    } catch (error) {
      res.writeHead(error.response.status || 500)
      res.end(JSON.stringify({ message: error.response.data['error'] || 'Server Error' }))
    }
  }
}

module.exports = LocaisController;