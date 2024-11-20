import { RootState } from "@/state";
import { addTodo, toggleTodo } from "@/state/todos";
import { Todo } from "@/types";
import { NextPage } from "next";
import { ComponentProps } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home: NextPage = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();
  const toggleIsDone = (id: Todo["id"]) => {
    dispatch(toggleTodo({ id }));
  };
  const handleSubmit: ComponentProps<"form">["onSubmit"] = (e) => {
    e.preventDefault();
    const text: string = e.currentTarget.text.value;
    dispatch(addTodo({ text }));
    e.currentTarget.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" autoComplete="off" required />
        <button>追加</button>
      </form>
      <p>TODO:{todos.length}件</p>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.isDone}
              onChange={() => toggleIsDone(todo.id)}
            />
            {todo.text}
          </label>
        </div>
      ))}
    </div>
  );
};
export default Home;
