const PersonagensController = require("../controllers/personagens-controller");
const LocaisController = require("../controllers/locais-controller");
const EpisodiosController = require("../controllers/episodios-controller");

module.exports = {
  "/rickandmorty-page": PersonagensController.listTodosPersonagens,
  "/rickandmorty/personagem-nome": PersonagensController.listPersonagensPorNome,
  "/rickandmorty/personagem-id": PersonagensController.listPersonagensPorId,
  "/rickandmorty/personagens-status": PersonagensController.listPersonagensPorStatus,
  "/rickandmorty/personagens-genero": PersonagensController.listPersonagensPorGenero,
  "/rickandmorty/personagens-species": PersonagensController.listPersonagensPorEspecie,
  "/rickandmorty/personagens-origem":
    PersonagensController.listPersonagensPorOrigem,  
  "/rickandmorty/locais-page": LocaisController.listLocaisPage,
  "/rickandmorty/locais-tipo": LocaisController.listLocaisPorTipo,
  "/rickandmorty/locais-dimensao": LocaisController.listLocaisPorDimensao,
  "/rickandmorty/locais-nome": LocaisController.listLocaisPorNome,
  "/rickandmorty/episodios": EpisodiosController.listTodosEpisodios,
  '/rickandmorty/episodio-nome': EpisodiosController.listEpisodioPorNome,
  '/rickandmorty/episodio-tag': EpisodiosController.listEpisodiosPorTag,
  '/rickandmorty/criarjson-personagem/': PersonagensController.createPersonagensPorNome,
};