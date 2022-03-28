import './go-button.scss';

import { useDispatch, useSelector } from 'react-redux';
import { setTextSearch } from '../../models/slices/text-search.slice';

export function GoButton(props) {
  const identifier = useSelector((state) => state.textSearch.text);
  const dispatch = useDispatch();

  return (
    <div>
      <button className="goButton" type='button' onClick={() => {
        props.catchPokemon(identifier);
        dispatch(setTextSearch(''))
        return false;
      }
      }>GO</button>
    </div>
  )
}