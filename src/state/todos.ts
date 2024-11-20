import { Todo } from "@/types";
import { Reducer } from "redux";

const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

// action
export const addTodo = (text: Todo["text"]) => {
  return {
    type: ADD_TODO,
    payload: { text },
  } as const;
};
export const toggleTodo = (id: Todo["id"]) => {
  return {
    type: TOGGLE_TODO,
    payload: { id },
  } as const;
};
type Action = ReturnType<typeof addTodo | typeof toggleTodo>;

// reducer
export const todosReducer: Reducer<Todo[], Action> = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO: {
      const newTodo = {
        id: state.length + 1,
        text: action.payload.text,
        isDone: false,
      };
      return [...state, newTodo];
    }
    case TOGGLE_TODO: {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    }
    default: {
      return state;
    }
  }
};
