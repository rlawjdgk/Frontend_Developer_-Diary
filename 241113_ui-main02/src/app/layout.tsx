import React, { ReactNode } from "react";
import "./globals.css";
import Link from "next/link";
import style from "./layout.module.css";
import { BookData } from "@/types";

const Footer = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`
  );
  if (!response.ok) {
    return <footer>제작 @rlawjdgk</footer>;
  }

  const books: BookData[] = await response.json();
  const bookCount = books.length;

  return (
    <footer>
      <div>{bookCount}개의 도서가 등록되어 있습니다</div>
    </footer>
  );
};

const Rootlayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ko">
      <body>
        <div className={style.container}>
          <header>
            <Link href={"/"}>🎁 ONEBITE BOOKS</Link>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
};

export default Rootlayout;
