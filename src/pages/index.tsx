import { Header } from "@/components/Header";
import { RootState } from "@/state";
import { toggleTodo } from "@/state/todos";
import { Todo } from "@/types";
import { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";

const Home: NextPage = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();
  const toggleIsDone = (id: Todo["id"]) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div>
      <Header />
      <h1>TODO一覧</h1>
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
