import { RootState } from "@/state";
import Link from "next/link";
import { FC } from "react";
import { useSelector } from "react-redux";

export const Header: FC = () => {
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <header>
      <nav>
        <h2>
          <Link href="/">TODO一覧</Link>
        </h2>
        <h2>
          <Link href="/add">TODO追加</Link>
        </h2>
      </nav>
      <h2>TODO:{todos.length}件</h2>
    </header>
  );
};
