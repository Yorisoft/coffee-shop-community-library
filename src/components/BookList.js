import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function BookList() {
  const apiURL = "https://anapioficeandfire.com/api/characters/5";
  const [books, setBooks] = useState([]); //can be empty but must make sure type is set

  useEffect(() => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((books) => setBooks(books["result"]));
  }, []);

  return (
    <div className="container">
      {books.map((book) => {
        const authors = book.author;
        return (
          <React.Fragment key={book.isbn}>
            <Link to={"/books/" + book.isbn}>
              <div
                className="card text-center"
                style={{
                  width: "12rem",
                  margin: "2rem",
                  float: "left",
                }}
              >
                <img
                  className="card img"
                  src={book.image_url_l}
                  alt="Null"
                  style={{ height: "12rem" }}
                />
                <div className="card-body" style={{ height: "9.5rem" }}>
                  <h3
                    className="card-title"
                    style={{
                      marginTop: "-1rem",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {book.title}
                  </h3>
                  <p
                    className="card-text text-secondary"
                    style={{
                      marginTop: "1.8rem",
                      width: "90%",
                      textOverflow: "ellipsis",
                    }}
                  >
                    By: {authors}
                  </p>
                </div>
              </div>
            </Link>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default BookList;
