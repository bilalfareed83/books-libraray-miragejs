import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    setInterval(() => {
      fetch("/api/books/")
        .then((res) => res.json())
        .then((data) => {
          setBooks(data);
        });
    }, 2000);
  }, []);

  const addBook = () => {
    try {
      const title = prompt("wrrite book title");
      const author = prompt("write author name");

      if (!title || !author) return;

      fetch("/api/add/", {
        method: "POST",
        body: JSON.stringify({
          title,
          author,
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    } catch (error) {
      console.log(error);
    }
  };

  if (!books) return <h2>loading..</h2>;
  return (
    <div className="App">
      <h2>Books Library</h2>
      <ul>
        {books.map((bookObj, index) => {
          let { title, author } = bookObj;
          return (
            <li key={index}>
              {title},{author}
            </li>
          );
        })}
      </ul>
      <button onClick={addBook}>Add book</button>
    </div>
  );
}

export default App;
