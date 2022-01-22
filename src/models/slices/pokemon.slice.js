import { createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    caught: null,
    error: false,
    errorDetail: ''
  },
  reducers: {
    clearCaught: (state) => {
      return {
        caught: null,
        error: false,
        errorDetail: ''
      }
    },
    caughtPokemon: (state, action) => {
      return {
        caught: action.payload,
        error: false,
        errorDetail: ''
      };
    },
    failCatchingPokemon: (state, action) => {
      return {
        caught: null,
        error: true,
        errorDetail: action.payload
      };
    }
  }
});

export const { clearCaught, caughtPokemon, failCatchingPokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;