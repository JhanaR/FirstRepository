import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";
import "./FoodColor.css";
import { GoHeart } from "react-icons/go";
import { VscAccount } from "react-icons/vsc";
import { HiOutlineShoppingBag } from "react-icons/hi";

function FoodNavBar() {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">
              <img src="Myntra.jpg" width="40" height="40" alt="" />
            </a>
          </nav>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="">MEN</Nav.Link>
              <Nav.Link href="#pricing">WOMEN</Nav.Link>
              <Nav.Link href="#pricing">KIDS</Nav.Link>
              <Nav.Link href="#pricing">HOME & LIVING</Nav.Link>
              <Nav.Link href="#pricing">BEAUTY</Nav.Link>
              <Nav.Link href="#pricing">STUDIO</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Ground Floor
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  First Floor
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  Second Floor
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  Third Floor
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown> */}
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search for products, brand and more"
                width="50"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav>
              <Nav.Link href="#deets">
                <VscAccount />
                Profile
              </Nav.Link>
              <Nav.Link href="#deets">
                <GoHeart /> Wishlist
              </Nav.Link>
              <Nav.Link href="#deets">
                <HiOutlineShoppingBag /> Bag
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default FoodNavBar;
