import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";

const AppNavbar = () => {
  const { user } = useAuth();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            {user.token === "" ? (
              <>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/registro">Registro</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="/perfil">Perfil</Nav.Link>
                <Nav.Link href="/perfil">Favoritos</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
