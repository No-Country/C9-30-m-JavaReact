import { useState, useEffect } from "react";
import { Button, Form, Container, Row, Col, Stack } from "react-bootstrap";
import { createUser, getUsers } from "../petitions";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebookSquare, FaApple } from "react-icons/fa";

const Registro = () => {
  const navigate = useNavigate();
  const [newuser, setNewUser] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  // const getUserMock = () => {
  //   getUsers()
  //     .then((res) => {
  //       console.log(res);
  //       setNewUser(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   getUserMock();
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(newuser);
    // console.log(newuser);
    // console.log(newuser.repeatPassword !== newuser.password ? true : false);
    createUser(newuser)
      .then((res) => {
        if (res.status === 201) {
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newuser, [name]: value });
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
            <Stack gap={3}>
              <h2>Registrate con una red social</h2>
              <Button variant="info">
                <FaGoogle className="d-block mt-1 iconStyle"/>
                Registrarse con Google
              </Button>
              <Button variant="info">
                <FaApple className="d-block mt-1 iconStyle" />
                Registrarse con Facebook
              </Button>
              <Button variant="info">
                <FaFacebookSquare
                  className="d-block mt-1 iconStyle"
                  
                />
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
            <h2>Registrate con tu email</h2>
            <br />
            <Form onSubmit={handleSubmit}>
              <Stack gap={3}>
                <Form.Control
                  type="text"
                  name="name"
                  value={newuser.name}
                  placeholder="Nombre"
                  onChange={handleChange}
                  required
                />
                <Form.Control
                  type="text"
                  name="surname"
                  value={newuser.surname}
                  placeholder="Apellido"
                  onChange={handleChange}
                  required
                />
                <Form.Control
                  type="email"
                  name="email"
                  value={newuser.email}
                  placeholder="Email"
                  onChange={handleChange}
                  required
                />
                <Form.Control
                  type="password"
                  name="password"
                  value={newuser.password}
                  placeholder="Contraseña"
                  onChange={handleChange}
                  required
                />
                <Form.Control
                  type="password"
                  name="repeatPassword"
                  value={newuser.repeatPassword}
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
              </Stack>
              <br />
              <Form.Text className="text-muted">
                *Al registrarte, aceptas nuestras{" "}
                <strong>Condiciones de Servicio</strong> y reconoces haber leído
                nuestra <strong>Política de Privacidad</strong>
              </Form.Text>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Registro;
