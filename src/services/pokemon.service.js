import axios from "axios";

export class PokemonService {

  #baseURL = process.env.REACT_APP_POKEMON_API_URL;

  throwPokeball(identifier) {
    if (Number.isInteger(+identifier)) {
      identifier = +identifier + '';
    }
    return axios.get(`${this.#baseURL}/pokemon/${identifier}`, {
      timeout: 5000
    });
  }

}