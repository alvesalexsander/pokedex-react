import { createSlice } from "@reduxjs/toolkit";

const numPadSlice = createSlice({
  name: 'numPad',
  initialState: {
    clickedKey: ''
  },
  reducers: {
    setClickedKey: (state, action) => {
      state.clickedKey = action.payload;
    }
  }
});

export const { setClickedKey } = numPadSlice.actions;

export default numPadSlice.reducer;