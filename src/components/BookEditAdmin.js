import React, { useState } from "react";
import Form from "./Form";

const BookEdit = (props) => {
  const [book, setBook] = useState({
    isbn: "",
    author: "",
    title: "",
    publisher: "",
    number_of_copies: null,
    year_of_publication: null,
  });

  function handleUpdate({ target }) {
    setBook({ ...book, [target.name]: target.value });
  }

  function updateLibrary() {
    fetch("http://localhost:5000/book", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...book,
        number_of_copies: parseInt(book.number_of_copies, 10),
        year_of_publication: parseInt(book.year_of_publication, 10),
      }),
    })
      .then((response) => response.json())
      .then((book) => console.log(book));
    props.history.push("/");
  }

  return (
    <>
      <div
        className="container"
        style={{ marginTop: "5rem", paddingLeft: "50px" }}
      >
        <h1> Create a Book Entry </h1>
        <p> Fill out all fields below </p>
        <Form book={book} onChange={handleUpdate} onSave={updateLibrary} />
      </div>
    </>
  );
};

export default BookEdit;
