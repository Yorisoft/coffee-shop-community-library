import React from "react";
import BookList from "./BookList";
import CenterImage from "../assets/many-old-books.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron } from "react-bootstrap";

function HomePage() {
  const jumboStyle = {
    height: 700,
    backgroundImage: `url(${CenterImage})`,
    backgroundSize: "cover",
    textAlign: "center",
  };

  const welcome = {
    paddingLeft: "26px",
    paddingRight: "26px",
    position: "relative",
    top: "9rem",
    color: "#FFEB3B",
    fontSize: "70px",
    display: "inline",
    background: "#17a2b8",
    opacity: "0.73",
  };
  return (
    <div>
      <Jumbotron style={jumboStyle}>
        <h1 style={welcome}> Welcome to our site </h1>
        <br /> <br /> <h3 style={welcome}> (づ｡◕‿‿◕｡)づ </h3>
      </Jumbotron>
      <h3 style={{ marginLeft: "3rem", color: "#17a2b8" }}>
        Explore our entire collection
      </h3>
      <BookList />
    </div>
  );
}

export default HomePage;
