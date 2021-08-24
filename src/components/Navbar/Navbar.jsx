import React from "react";
// navbar scss
import "./navbar.scss";

import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <>
      <section id="navbar">
        <Navbar collapseOnSelect expand="lg" className="fixed-top bg-white">
          <Container>
            <NavLink to="/">
              <Navbar.Brand to="/">
                <img src={logo} alt="Logo" />
              </Navbar.Brand>
            </NavLink>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto mt-4 mt-lg-0">
                <NavLink
                  to="/"
                  exact
                  activeClassName="menu-active"
                  className="nav-link"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  exact
                  activeClassName="menu-active"
                  className="nav-link"
                >
                  About
                </NavLink>
                <NavLink
                  to="/menu"
                  exact
                  activeClassName="menu-active"
                  className="nav-link"
                >
                  Menu
                </NavLink>
                <NavDropdown
                  title="Shop"
                  exact
                  activeClassName="menu-active"
                  id="basic-nav-dropdown"
                >
                  <NavLink to="/menu" exact className="dropdown-item">
                    Mina Bazar
                  </NavLink>
                  <NavLink to="/menu" exact className="dropdown-item">
                    Hat Bazar
                  </NavLink>
                  <NavLink to="/menu" exact className="dropdown-item">
                    Dhaka Market
                  </NavLink>
                </NavDropdown>
                <NavLink
                  exact
                  to="/news"
                  activeClassName="menu-active"
                  className="nav-link"
                >
                  News
                </NavLink>
                <NavLink
                  to="/contact"
                  exact
                  activeClassName="menu-active"
                  className="nav-link"
                >
                  Contact
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
    </>
  );
};

export default Header;
