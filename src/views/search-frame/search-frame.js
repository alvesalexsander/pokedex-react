import './search-frame.scss';
import {TextSearch} from './text-search/text-search';
import {NumPad} from './numpad/numpad';
import { GoButton } from '../go-button/go-button';

import { appendTextSearch } from '../../models/slices/text-search.slice';

export function SearchFrame(props) {
  return (
    <div className="search-frame">
      <TextSearch></TextSearch>
      <GoButton catchPokemon={props.catchPokemon}></GoButton>
      <NumPad reducers={[appendTextSearch]}></NumPad>
    </div>
  )
}