import Link from "next/link";
import { FC } from "react";

type Props = {
  todoCount: number;
};

export const Header: FC<Props> = ({ todoCount }) => {
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
      <h2>TODO:{todoCount}件</h2>
    </header>
  );
};
