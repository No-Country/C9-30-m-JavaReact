import { useState, useEffect } from "react";
import { Button, Form, Container, Row, Col, Stack } from "react-bootstrap";
import { createUser, getUsers } from "../petitions";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebookSquare, FaApple } from "react-icons/fa";

const Registro = () => {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  // useEffect(() => {
  //   getUserMock();
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newUser.repeatPassword === newUser.password) {
      try {
        await createUser(newUser);
        navigate("/");
      } catch (error) {
        alert(error);
      }
    } else {
      alert("Las contraseñas no coinciden");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  return (
    <div className="registro d-flex">
      <Container className="registro-container">
        <Row>
          <Col
            lg={6}
            style={{
              borderRight: "0.1rem solid",
              borderRightColor: "#00000042",
            }}
          >
            <h2 className="text-center mb-4">Regístrate con una red social</h2>
            <Stack gap={3} className="registro-content">
              <Button variant="info">
                <FaGoogle className="d-block mt-1 iconStyle" />
                Registrarse con Google
              </Button>
              <Button variant="info">
                <FaApple className="d-block mt-1 iconStyle" />
                Registrarse con Facebook
              </Button>
              <Button variant="info">
                <FaFacebookSquare className="d-block mt-1 iconStyle" />
                Registrarse con Apple
              </Button>
              <p>
                *Al registrarte, aceptas nuestras{" "}
                <strong>Condiciones de Servicio</strong> y reconoces haber leído
                nuestra <strong>Política de Privacidad</strong>
              </p>
            </Stack>
          </Col>
          <Col lg={6}>
            <h2 className="text-center">Regístrate con tu email</h2>
            <br />
            <Form onSubmit={handleSubmit}>
              <Stack gap={3} className="registro-content">
                <Form.Control
                  type="text"
                  name="name"
                  value={newUser.name}
                  placeholder="Nombre"
                  onChange={handleChange}
                  required
                />
                <Form.Control
                  type="text"
                  name="surname"
                  value={newUser.surname}
                  placeholder="Apellido"
                  onChange={handleChange}
                  required
                />
                <Form.Control
                  type="email"
                  name="email"
                  value={newUser.email}
                  placeholder="Email"
                  onChange={handleChange}
                  required
                />
                <Form.Control
                  type="password"
                  name="password"
                  value={newUser.password}
                  placeholder="Contraseña"
                  onChange={handleChange}
                  required
                />
                <Form.Control
                  type="password"
                  name="repeatPassword"
                  value={newUser.repeatPassword}
                  placeholder="Repetir contraseña"
                  onChange={handleChange}
                  required
                />

                <Button
                  variant="secondary"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Crear cuenta
                </Button>
                <Form.Text className="text-muted">
                  *Al registrarte, aceptas nuestras{" "}
                  <strong>Condiciones de Servicio</strong> y reconoces haber
                  leído nuestra <strong>Política de Privacidad</strong>
                </Form.Text>
              </Stack>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Registro;
