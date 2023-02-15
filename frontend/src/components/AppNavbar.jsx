import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

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
                <NavDropdown title="Perfil" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/campanias">
                    Campañas creadas
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Mis patrocinios
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Mensajes
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Configuraciones
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.5">
                    Log Out
                  </NavDropdown.Item>
                </NavDropdown>
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
