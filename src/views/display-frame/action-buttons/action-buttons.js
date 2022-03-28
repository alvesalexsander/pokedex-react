import './action-buttons.scss';
import { useSelector, useDispatch } from 'react-redux';
import { PokemonService } from '../../../services/pokemon.service';
import { caughtPokemon } from '../../../models/slices/pokemon.slice';

export function ActionButtons(props) {
  const pokemonData = useSelector(state => state.pokemon);
  const dispatch = useDispatch();

  const pokemonService = new PokemonService();

  return (
    <div className="action_buttons">
      <button id="leftArrow"
        className="arrow__left"
        style={{ visibility: pokemonData?.caught?.id > 1 ? 'visible' : 'hidden' }}
        onClick={getPreviousPokemon}><div className="shape"></div></button>
      <button id="playCry" className="hear_cry"><div className="cry"></div></button>
      <button id="rightArrow" className="arrow__right" onClick={getNextPokemon}><div className="shape"></div></button>
    </div>
  )

  async function getNextPokemon() {
    const currentId = pokemonData?.caught?.id ?? 0;
    const nextPokemon = await pokemonService.throwPokeball(currentId + 1);
    dispatch(caughtPokemon(nextPokemon.data));
  }

  async function getPreviousPokemon() {
    const currentId = pokemonData?.caught?.id ?? 2;
    const nextPokemon = await pokemonService.throwPokeball(currentId - 1);
    dispatch(caughtPokemon(nextPokemon.data));
  }
}