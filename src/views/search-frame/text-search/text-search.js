import './text-search.scss';

import { useSelector, useDispatch } from 'react-redux';
import { setTextSearch } from '../../../models/slices/text-search.slice';

export function TextSearch(props) {
  const text = useSelector((state) => state.textSearch.text);
  const dispatch = useDispatch();

  return (
    <div className='textSearch'>
      <form id="search" className="textSearch__form" autoComplete="off" onSubmit={clearInput}>
        <div className='clearButton' hidden={!text.length} onClick={clearInput}></div>
        <div className="textSearch__form__autocomplete"></div>
        <input id="textSearch__form__field"
        className="textSearch__form__field"
        type="text"
        name="nome"
        placeholder="Quem é esse Pokémon?"
        autoComplete="off"
        value={text}
        onInput={(value) => dispatch(setTextSearch(value?.target?.value ?? ''))} />
      </form>
    </div>
  )

  function clearInput(event) {
    props.catchPokemon(text);
    dispatch(setTextSearch(''));
    event.preventDefault();
  }
}