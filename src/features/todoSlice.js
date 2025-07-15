import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  
];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({ name: action.payload });
    },

    removeTodo: (state, action) => {
      return state.filter((todo, index) => index !== action.payload);
    },

    updateTodo: (state, action) => {
      const { index, newTodo } = action.payload;
      if (index >= 0 && index < state.length && newTodo.length > 0) {
        console.log(newTodo)
        state[index].name = newTodo;

      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo} = todoSlice.actions;

export default todoSlice.reducer;
