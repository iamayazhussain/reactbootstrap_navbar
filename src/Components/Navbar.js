import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="md" bg="light" variant="light">
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://i.ibb.co/Y8CMrvd/isl-Logo-Desktop.png"
            width="200"
            height="50"
            className="img-fluid"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Link to="/home">
              <Nav.Link href="#home">Home</Nav.Link>
            </Link>
            <NavDropdown title="About" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#blog" as={Link} to="/blog">
                Blog
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Pricing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Academics" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" as={Link} to="/features">
                Action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Pricing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <Link to="/blog">
              <Nav.Link href="#blog">Blog</Nav.Link>
            </Link>
            <NavDropdown title="Department" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" as={Link} to="/features">
                Action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Pricing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Link to="/rnd">
              <Nav.Link href="#rnd">R & D</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
