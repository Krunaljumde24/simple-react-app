import { createSlice } from "@reduxjs/toolkit";

const initState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },

    reset: (state) => {
      state.value = 0;
    },
  },
});

export default counterSlice.reducer;
export const { increment, decrement, reset } = counterSlice.actions;
