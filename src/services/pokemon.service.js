import axios from "axios";

export class PokemonService {

  #baseURL = 'https://pokeapi.co/api/v2/pokemon';

  throwPokeball(identifier) {
    return axios.get(`${this.#baseURL + '/' + identifier}`, {
      timeout: 5000
    });
  }

}