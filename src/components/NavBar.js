import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from '../styles/NavBar.module.css';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from "../App";

const NavBar = () => {
  const currentUser = useContext(CurrentUserContext);

  // Display username if logged in
  const loggedInIcons = <>{currentUser?.username}</>;

  // Links for logged out users
  const loggedOutIcons = (
    <>
      <Nav.Link className={styles.NavLink}
        activeClassName={styles.Active} as={Link} to="/signin">
          Sign In
      </Nav.Link>
      <Nav.Link className={styles.NavLink}
        activeClassName={styles.Active} as={Link} to="/signup">
          Sign Up
      </Nav.Link>
    </>
  );


  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="logo" height="45" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-left">
            <Nav.Link className={styles.NavLink}
        activeClassName={styles.Active} as={Link} to="/">
          Home
            </Nav.Link>
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;