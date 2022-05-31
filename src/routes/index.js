const PersonagensController = require("../controllers/episodios-controller");

module.exports = {
    '/rickyandmorty': PersonagensController.listTodosPersonagens,
    '/rickyandmorty/personagem-nome': () => console.log('Personagem por nome'),
    '/rickyandmorty/personagem?id': () => console.log('Personagem por id'),
    '/rickyandmorty/personagens': () => console.log('Listando personagens'),
}