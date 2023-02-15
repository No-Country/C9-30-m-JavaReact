import { Container, Nav, Navbar } from "react-bootstrap";

import Logo from "../assets/logo.svg";

const token = localStorage.getItem("token");

const AppNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            {token === "" ? (
              <>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/registro">Registro</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="/perfil">Perfil</Nav.Link>
                <Nav.Link href="/favorites">Favoritos</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
