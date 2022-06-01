const PersonagensController = require("../controllers/personagens-controller");
const LocaisController = require('../controllers/locais-controller')

module.exports = {
    '/rickyandmorty-page': PersonagensController.listTodosPersonagens,
    '/rickyandmorty/personagem-nome': PersonagensController.listPersonagensPorNome,
    '/rickyandmorty/personagem-id': PersonagensController.listPersonagensPorId,
    '/rickyandmorty/personagens-status': PersonagensController.listPersonagensPorStatus,
    '/rickyandmorty/personagens-genero': PersonagensController.listPersonagensPorGenero,
    '/rickyandmorty/personagens-species': PersonagensController.listPersonagensPorEspecie,
    '/rickyandmorty/locais-page': LocaisController.listLocaisPage,
    '/rickyandmorty/locais-tipo': LocaisController.listLocaisPorTipo,
    '/rickyandmorty/locais-dimensao': LocaisController.listLocaisPorDimensao,
    '/rickyandmorty/locais-nome': LocaisController.listLocaisPorNome,
}