import React from "react";
import { Row, Col } from "react-bootstrap";

function Footer() {
  let styles = {
    color: "white",
    marginTop: "1.5rem",
    background: "#17a2b8",
    height: "12rem",
    clear: "left ",
    bottom: "0 ",
  };
  let logo = {
    marginLeft: "5rem",
    marginTop: "20px",
    fontSize: "28px",
    textDecoration: "none",
    color: "#FFEB3B",
  };
  return (
    // Using BootStrap Grid layout to position elements
    <div className="container-fluid" style={styles}>
      <Row>
        <Col xs={7} style={{ marginTop: "2rem" }}>
          <a href="/" style={logo}>
            Books & Coffee Shop
          </a>
        </Col>
        <Col>
          <ul
            style={{
              listStyleType: "none",
              marginTop: "2rem",
            }}
          >
            <li>
              <p>Join</p>
            </li>
            <li className="list-unstyled">
              <p>Manage Account</p>
            </li>
            <li className="list-unstyled">
              <p>Learn More</p>
            </li>
          </ul>
        </Col>
        <Col>
          <ul style={{ marginTop: "1.7rem" }}>
            <li className="list-unstyled">
              <p>Contact Us</p>
            </li>
            <li className="list-unstyled">
              <p>Locations</p>
            </li>
            <li className="list-unstyled">
              <p>FAQS</p>
            </li>
            <li className="list-unstyled">
              <p>Other</p>
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
