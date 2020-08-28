import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetch("/api/books/")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className="App">
      <h2>Books Library</h2>
    </div>
  );
}

export default App;
