import { createSlice } from "@reduxjs/toolkit";

const initState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
  },
});

export default todoSlice.reducer;
export const { addTodo } = todoSlice.actions;
