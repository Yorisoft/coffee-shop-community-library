import React, { useEffect, useState } from "react";
import { Jumbotron } from "react-bootstrap";

function DeatilsAdmin(props) {
  const str = props.history.location.pathname;
  const end = str.length;
  const start = str.length - 11;
  const bookSelect = str.slice(start, end);
  const newAPI = `http://localhost:5000/book${bookSelect}`;

  const [books, setBooks] = useState([]); //can be empty but must make sure type is set
  useEffect(() => {
    fetch(newAPI)
      .then((response) => response.json())
      .then((books) => setBooks(books));
  }, [newAPI]);

  return (
    <Jumbotron
      style={{ marginTop: "55px", textAlign: "center", height: "45rem" }}
    >
      <h4> This is the detail-editing page for </h4>
      <h1>{books.title}</h1>

      <div className="books" style={{ marginTop: "55px" }}>
        <div className="book">
          <h5>On hand: {books.number_of_copies}</h5>
          <h5>ISBN: {books.isbn}</h5>
          <div className="details">
            <p>Publisher: {books.publisher}</p>
            <p>Author: {books.author}</p>
            <p>Published In: {books.year_of_publication}</p>
          </div>
        </div>
      </div>

      <button
        className="btn btn-success"
        onClick={() => addBook(books.isbn, books.number_of_copies)}
      >
        +1
      </button>
      <button
        className="btn btn-danger"
        style={{ marginLeft: "10px" }}
        onClick={() => deleteBook(books.isbn, books.number_of_copies)}
      >
        -1
      </button>
    </Jumbotron>
  );
}

function deleteBook(isbn, count) {
  if (count < 1) {
    alert("Store already has 0 on hand");
    return;
  }

  window.location.reload(true);
  // Deletes books
  fetch(`http://localhost:5000/inventory/loan/book/${isbn}`, {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ loans: 1 }), //property name : value
  })
    .then((response) => response.json())
    .then((books) => console.log(books));
}

function addBook(isbn) {
  window.location.reload(true);
  // Adds books
  fetch(`http://localhost:5000/inventory/return/book/${isbn}`, {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ returns: 1 }), //property name : value
  })
    .then((response) => response.json())
    .then((books) => console.log(books));
}

export default DeatilsAdmin;
