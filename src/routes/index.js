const PersonagensController = require("../controllers/personagens-controller");

module.exports = {
    '/rickandmorty': PersonagensController.listTodosPersonagens,
    '/rickandmorty/personagem-nome': PersonagensController.listPersonagensPorNome,
    '/rickandmorty/personagem-id': PersonagensController.listPersonagensPorId,
    '/rickandmorty/personagens-status': PersonagensController.listPersonagensPorStatus,
    '/rickandmorty/personagens-genero': PersonagensController.listPersonagensPorGenero,    
}