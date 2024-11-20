import { Todo } from "@/types";
import type { AppProps } from "next/app";
import { useState } from "react";

const TODOS: Todo[] = [
  {
    id: 1,
    text: "foo",
    isDone: false,
  },
  {
    id: 2,
    text: "bar",
    isDone: true,
  },
];
export default function App({ Component, pageProps }: AppProps) {
  const [todos, setTodos] = useState<Todo[]>(TODOS);

  return <Component {...pageProps} todos={todos} setTodos={setTodos} />;
}
