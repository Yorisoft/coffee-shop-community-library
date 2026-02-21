import React from "react";
import { Link } from "react-router-dom";

function Form(props) {
  return (
    <div className="container" style={{ paddingLeft: "50px" }}>
      <div className="book">
        <form>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            className="form-control"
            placeholder="Title"
            value={props.book.title}
            onChange={props.onChange}
          />
          <br />
          <label for="author">Author:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Author"
            name="author"
            value={props.book.author}
            onChange={props.onChange}
          />
          <br />
          <label for="isbn">ISBN:</label>
          <input
            type="text"
            class="form-control"
            placeholder="ISBN"
            name="isbn"
            value={props.book.isbn}
            onChange={props.onChange}
          />
          <br />
          <label for="number_of_copies">Number of Copies:</label>
          <input
            type="text"
            class="form-control"
            placeholder="Number Of Copies"
            name="number_of_copies"
            value={props.book.number_of_copies}
            onChange={props.onChange}
          />
          <br />
          <label for="publisher">Publisher:</label>
          <input
            type="text"
            class="form-control"
            placeholder="Publisher"
            name="publisher"
            value={props.book.publisher}
            onChange={props.onChange}
          />
          <br />
          <label for="year_of_publication">Date of Publication:</label>
          <input
            type="text"
            class="form-control"
            placeholder="Year"
            name="year_of_publication"
            value={props.book.year_of_publication}
            onChange={props.onChange}
          />
          <br />
          <Link>
            <button
              type="submit"
              class="btn btn-primary"
              onClick={props.onSave}
            >
              Submit
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Form;
