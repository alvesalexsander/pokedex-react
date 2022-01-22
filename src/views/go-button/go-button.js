import './go-button.scss';

import { useSelector } from 'react-redux';

export function GoButton(props) {
  const identifier = useSelector((state) => state.textSearch.text);

  return (
    <div>
      <button className="goButton" type='button' onClick={() => {
        props.catchPokemon(identifier);
        return false;
      }
      }>GO</button>
    </div>
  )
}