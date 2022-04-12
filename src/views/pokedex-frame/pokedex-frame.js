import './pokedex-frame.scss';
import { DisplayFrame } from '../display-frame/display-frame';
import { SearchFrame } from '../search-frame/search-frame';
import { Flipper } from './flipper/flipper';

import { useDispatch } from 'react-redux';
import { caughtPokemon, failCatchingPokemon } from '../../models/slices/pokemon.slice';
import { PokemonService } from '../../services/pokemon.service';

export function PokedexFrame(props) {
  const pokemonService = new PokemonService();
  const dispatch = useDispatch();

  return (
    <div className='pokedex_frame'>
      <DisplayFrame></DisplayFrame>
      <Flipper></Flipper>
      <SearchFrame catchPokemon={catchPokemon}></SearchFrame>
    </div>
  )

  async function catchPokemon(identifier) {
    if (!identifier) {
      return;
    }

    try {
      const pokemonResponse = await pokemonService.throwPokeball(identifier.toLowerCase());
      dispatch(caughtPokemon(pokemonResponse?.data));
    } catch (error) {
      switch (error.toJSON().status) {
        case 404:
          dispatch(failCatchingPokemon('missing'));
          break;
        case 500:
          dispatch(failCatchingPokemon('unavailable'));
          break;
        default:
          dispatch(failCatchingPokemon('other'));
      }
    }

  }
}