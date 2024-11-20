import { Todo } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Todo[] = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Pick<Todo, "text">>) => {
      const newTodo = {
        id: state.length + 1,
        text: action.payload.text,
        isDone: false,
      };
      return [...state, newTodo];
    },
    toggleTodo: (state, action: PayloadAction<Pick<Todo, "id">>) => {
      const newState = state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
      return newState;
    },
  },
});

export const { addTodo, toggleTodo } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
