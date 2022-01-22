import { configureStore } from "@reduxjs/toolkit";
import numPadReducer from './models/slices/numpad.slice';
import textSearchReducer from './models/slices/text-search.slice';
import pokemonReducer from './models/slices/pokemon.slice';

export default configureStore({
  reducer: {
    numPad: numPadReducer,
    textSearch: textSearchReducer,
    pokemon: pokemonReducer
  },
});