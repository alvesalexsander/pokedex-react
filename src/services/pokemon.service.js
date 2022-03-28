import axios from "axios";

export class PokemonService {

  #baseURL = 'https://pokeapi.co/api/v2/pokemon';

  throwPokeball(identifier) {
    if (Number.isInteger(+identifier)) {
      identifier = +identifier + '';
    }
    return axios.get(`${this.#baseURL + '/' + identifier}`, {
      timeout: 5000
    });
  }

}