import './search-frame.scss';
import {TextSearch} from './text-search/text-search';
import {NumPad} from './numpad/numpad';

export function SearchFrame(props) {
  return (
    <div className="search-frame">
      <TextSearch></TextSearch>
      <NumPad></NumPad>
    </div>
  )
}