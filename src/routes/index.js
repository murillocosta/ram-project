const PersonagensController = require("../controllers/personagens-controller");

module.exports = {
    '/rickyandmorty': PersonagensController.listTodosPersonagens,
    '/rickyandmorty/personagem-nome': PersonagensController.listPersonagensPorNome,
    '/rickyandmorty/personagem-id': PersonagensController.listPersonagensPorId,
    '/rickyandmorty/personagens-status': PersonagensController.listPersonagensPorStatus,
    '/rickyandmorty/personagens-genero': PersonagensController.listPersonagensPorGenero,
    
}