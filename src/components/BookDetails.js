import React, { useEffect, useState } from "react";
import { Jumbotron, Col, Row } from "react-bootstrap";

function BookDetails(props) {
  const reserveBtn = {
    background: "#FFEB3B",
    color: "#17a2b8",
    fontFamily: "Segoe UI",
    fontWeight: "bold",
  };
  const returnBtn = {
    background: "#17a2b8",
    color: "#FFEB3B",
    fontFamily: "Segoe UI",
    fontWeight: "bold",
    marginRight: "10px",
  };

  const str = props.history.location.pathname;
  const end = str.length;
  const start = str.length - 11;
  const bookSelect = str.slice(start, end);
  const newAPI = `http://localhost:5000/book${bookSelect}`;

  const [books, setBooks] = useState([]); //can be emptyyy but must make sure type is set
  useEffect(() => {
    fetch(newAPI)
      .then((response) => response.json())
      .then((books) => setBooks(books));
  }, [newAPI]);

  return (
    <Jumbotron
      className="App"
      style={{ marginTop: "55px", textAlign: "cenleftter", height: "51rem" }}
    >
      <Row>
        <Col
          style={{
            marginTop: "4rem",
            marginLeft: "10rem",
            textAlign: "center",
            height: "40rem",
          }}
        >
          <h1>{books.title}</h1>
          <h4>by: {books.author}</h4>
          <h5>{books.number_of_copies} copies on hand</h5>

          <div
            className="books"
            style={{ marginTop: "55px", textAlign: "center" }}
          >
            <div className="details">
              <p>Publisher: {books.publisher}</p>
              <p>ISBN: {books.isbn}</p>
              <p>Published In: {books.year_of_publication}</p>
            </div>
          </div>
          <button
            className="btn btn-primary"
            style={returnBtn}
            onClick={() => deleteBook(books.isbn, books.number_of_copies)}
          >
            Reserve Book
          </button>
          <button
            className="btn btn-success"
            style={reserveBtn}
            onClick={() => addBook(books.isbn)}
          >
            Return Book
          </button>
        </Col>
        <Col xs={7}>
          <img src={books.image_url_l} alt="" style={{ marginLeft: "20rem" }} />
        </Col>
      </Row>
    </Jumbotron>
  );
}

function deleteBook(isbn, count) {
  if (count < 1) {
    alert("Oh no! We have 0 on hand..");
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

export default BookDetails;
