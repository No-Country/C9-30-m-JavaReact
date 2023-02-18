import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import Logo from "../assets/logo.svg";
import { useAuth } from "../context/AuthContext";

const token = localStorage.getItem("token");

const AppNavbar = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.reload();
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="justify-content-around" style={{ width: "60%" }}>
            {token === null ? (
              <>
                <Nav.Link style={{ fontSize: "smaller" }} href="/login">
                  Login
                </Nav.Link>
                <Nav.Link style={{ fontSize: "smaller" }} href="/registro">
                  Registro
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link style={{ fontSize: "smaller" }} href="/favorites">
                  Favoritos
                </Nav.Link>
                <Nav.Link style={{ fontSize: "smaller" }} href="/mensajes">
                  Mensajes
                </Nav.Link>
                <NavDropdown
                  style={{ fontSize: "smaller" }}
                  title="Perfil"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item
                    style={{ fontSize: "smaller" }}
                    href="#action/3.1"
                  >
                    Campañas creadas
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    style={{ fontSize: "smaller" }}
                    href="#action/3.2"
                  >
                    Mis patrocinios
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    style={{ fontSize: "smaller" }}
                    href="#action/3.3"
                  >
                    Mensajes
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    style={{ fontSize: "smaller" }}
                    href="#action/3.4"
                  >
                    Configuraciones
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    style={{ fontSize: "smaller" }}
                    href="#"
                    onClick={handleLogout}
                  >
                    Log Out
                  </NavDropdown.Item>
                </NavDropdown>
                <Button variant="secondary">Cargar proyecto</Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
