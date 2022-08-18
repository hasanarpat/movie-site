import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./styles.css";
const Footer = () => {
  return (
    <Navbar expand="xl" bg="dark" variant="dark">
      <Container
        style={{
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Container>
          <Navbar.Brand href="#home" className="text-center">
            IMDP
          </Navbar.Brand>
          <Container style={{ display: "flex" }}>
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Container>
        </Container>
      </Container>
      <hr />
      <hr />
      <Container>
        <ul className=" footer-list">
          <li variant="a" className="btn btn-outlined-light ">
            Movies
          </li>
          <li className="btn btn-outlined-light  ">Contact</li>
          <li className="btn btn-outlined-light ">Inc. 2022</li>
          <li className="btn btn-outlined-light ">Socials</li>
          <li className="btn btn-outlined-light ">Blog</li>
          <li className="btn btn-outlined-light ">
            Tell Us What You Want to See
          </li>
        </ul>
      </Container>
    </Navbar>
  );
};

export default Footer;
