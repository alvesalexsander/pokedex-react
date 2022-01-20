import './pokedex-frame.scss';
import {DisplayFrame} from '../display-frame/display-frame';
import { SearchFrame } from '../search-frame/search-frame';

export function PokedexFrame(props) {
  return (
    <div className='pokedex_frame'>
      <DisplayFrame></DisplayFrame>
      <SearchFrame></SearchFrame>
    </div>
  )
}