import { Header } from "@/components/Header";
import { Todo } from "@/types";
import { NextPage } from "next";
import { ComponentProps, Dispatch, SetStateAction } from "react";

type Props = {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
};

const Add: NextPage<Props> = ({ todos, setTodos }) => {
  const handleSubmit: ComponentProps<"form">["onSubmit"] = (e) => {
    e.preventDefault();
    const text = e.currentTarget.text.value;
    setTodos((prevTodos) => {
      const newTodo = { id: prevTodos.length + 1, text, isDone: false };
      return [...prevTodos, newTodo];
    });
    e.currentTarget.reset();
  };
  return (
    <div>
      <Header todoCount={todos.length} />
      <h1>TDOO追加</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" autoComplete="off" required />
        <button>追加</button>
      </form>
    </div>
  );
};
export default Add;
