import React from "react";
import "./Navbars.css";
import logo from "../../asset/Group 427319469.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
export default function Navbars() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary bg-nav">
      <Container fluid-fluid>
        <Navbar.Brand href="#">
          <img className="logo" src={logo} alt="" srcset="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 nav">
            <Nav.Link className="page">Accueil</Nav.Link>
            <Nav.Link className="page">Ateliers</Nav.Link>
            <Nav.Link className="page">Produits</Nav.Link>
            <Nav.Link className="page">À propos de nous </Nav.Link>
            <Nav.Link className="page">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button>DEVENIR PARTENAIRE</Button>
            <Button className="btn1 ">S’IDENTIFIER</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
