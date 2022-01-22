import './numpad.scss';

import { useDispatch } from 'react-redux';
import { setClickedKey } from '../../../models/slices/numpad.slice';

export function NumPad(props) {
  const dispatch = useDispatch();

  const numKeys = [];

  ['1', '2', '3', '4', '5', '6', '7', '8', '9'].forEach((value) => {
    numKeys.push(
      <button
        key={value}
        className="key"
        onClick={() => dispatchReducers(value ?? '')}
        data-value={value}>
        {value}
      </button>)
  })
  return (
    <div className='numpad'>
      {numKeys}
      <button 
      className="key key-centered"
      onClick={() => dispatchReducers('0' ?? '')}
      data-value='0'
      >0</button>
    </div>
  )

  function dispatchReducers(value) {
    dispatch(setClickedKey(value ?? ''));
    for (const reducer of props.reducers) {
      console.log(value);
      dispatch(reducer(value ?? ''));
    }
  }
}

