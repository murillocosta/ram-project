const PersonagensController = require("../controllers/personagens-controller");
const LocaisController = require('../controllers/locais-controller')

module.exports = {
    '/rickandmorty': PersonagensController.listTodosPersonagens,
    '/rickandmorty/personagem-nome': PersonagensController.listPersonagensPorNome,
    '/rickandmorty/personagem-id': PersonagensController.listPersonagensPorId,
    '/rickandmorty/personagens-status': PersonagensController.listPersonagensPorStatus,
    '/rickandmorty/personagens-genero': PersonagensController.listPersonagensPorGenero,    
    '/rickandmorty-page': PersonagensController.listTodosPersonagens,
    '/rickandmorty/personagem-nome': PersonagensController.listPersonagensPorNome,
    '/rickandmorty/personagem-id': PersonagensController.listPersonagensPorId,
    '/rickandmorty/personagens-status': PersonagensController.listPersonagensPorStatus,
    '/rickandmorty/personagens-genero': PersonagensController.listPersonagensPorGenero,
    '/rickandmorty/personagens-species': PersonagensController.listPersonagensPorEspecie,
    '/rickandmorty/locais-page': LocaisController.listLocaisPage,
    '/rickandmorty/locais-tipo': LocaisController.listLocaisPorTipo,
    '/rickandmorty/locais-dimensao': LocaisController.listLocaisPorDimensao,
    '/rickandmorty/locais-nome': LocaisController.listLocaisPorNome,
}