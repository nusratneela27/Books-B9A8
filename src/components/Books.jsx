import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="mt-[50px] mx-[30px] lg:mx-[100px]">
      <h1 className="text-center text-4xl font-bold my-[30px] ">Books</h1>

      <div className="grid  lg:grid-cols-3 gap-[16px]">
        {books.map((book) => (
          <Book book={book} key={book.id}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
