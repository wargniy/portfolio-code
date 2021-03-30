import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="bg-#1e1e1e" fixed="top" expand="lg">
      <Navbar.Brand href="#home" className="font name-logo">
        Y.WARGNIER
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="font links ml-auto">
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/yoann-wargnier">
            <img
              alt="linkedin logo"
              src="/assets/images/icons/linkedin.svg"
              width="24"
              height="24"
              className="icon"
            />
          </Nav.Link>
          <Nav.Link href="https://github.com/wargniy">
            <img
              alt="github logo"
              src="/assets/images/icons/github.svg"
              width="24"
              height="24"
              className="icon"
            />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
