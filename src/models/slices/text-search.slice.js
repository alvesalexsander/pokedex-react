import { createSlice } from "@reduxjs/toolkit";

const textSearchSlice = createSlice({
  name: 'textSearch',
  initialState: {
    text: ''
  },
  reducers: {
    setTextSearch: (state, action) => {
      state.text = action.payload;
    },
    appendTextSearch: (state, action) => {
      console.log(action.payload)
      state.text = state.text + action.payload;
    }
  }
});

export const { setTextSearch, appendTextSearch } = textSearchSlice.actions;

export default textSearchSlice.reducer;