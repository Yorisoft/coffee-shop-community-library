import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, Button, NavItem } from "react-bootstrap";

function Header() {
  const color = { background: "#17a2b8" };
  const btn = {
    background: "#FFEB3B",
    color: "#17a2b8",
    fontFamily: "Segoe UI",
    fontWeight: "bold",
  };

  return (
    // Using BootStrap Nav/Navbar with React Router Link to navigate the web app.
    <Navbar default expand="lg" variant="dark" fixed="top" style={color}>
      <Navbar.Brand href="/">Books & Coffee Shop</Navbar.Brand>
      {/* Toggle - button for toggling targeted element. Requires target element id */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {/* Collape - collapsable element  */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/*  NavItem takes a unique eventKey for handling onClicks */}
          <NavItem eventkey={1} href="/">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
          </NavItem>
          {/* <NavItem eventkey={2} href="/about">
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
  </NavItem>*/}
          <NavItem eventkey={2} href="/admin">
            <Nav.Link as={Link} to="/admin">
              Admin
            </Nav.Link>
          </NavItem>
        </Nav>

        <Form inline>
          <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
          {/* Form.Control is an input type component */}
          <Button variant="warning" style={btn}>
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
