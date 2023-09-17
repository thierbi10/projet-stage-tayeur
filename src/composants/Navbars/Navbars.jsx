import React from "react";
import "./Navbars.css";
import logo from "../../asset/Group 427319469.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import { Link } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
export default function Navbars() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary bg-nav fixed-top">
      <Container fluid-fluid>
        <Navbar.Brand href="#">
          <img className="logo" src={logo} alt="" srcset="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 nav">
            <Nav.Item>
              <Link to="/" className="page">
                Accueil
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/couture" className="page">
                Ateliers
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/produit" className="page">
                Produits
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/a-propos-nous" className="page">
                À propos de nous
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/contact" className="page">
                Contact
              </Link>
            </Nav.Item>
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
