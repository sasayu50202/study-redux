import { Header } from "@/components/Header";
import { addTodo } from "@/state/todos";
import { NextPage } from "next";
import { ComponentProps } from "react";
import { useDispatch } from "react-redux";

const Add: NextPage = () => {
  const dispatch = useDispatch();
  const handleSubmit: ComponentProps<"form">["onSubmit"] = (e) => {
    e.preventDefault();
    const text = e.currentTarget.text.value;
    dispatch(addTodo(text));
    e.currentTarget.reset();
  };
  return (
    <div>
      <Header />
      <h1>TDOO追加</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" autoComplete="off" required />
        <button>追加</button>
      </form>
    </div>
  );
};
export default Add;
