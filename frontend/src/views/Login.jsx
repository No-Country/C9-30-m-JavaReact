import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Form, Stack } from "react-bootstrap";
import { FaGoogle, FaFacebookSquare, FaApple } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(user);
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="login d-flex">
      <div className="login-container">
        <h2>Inicia sesión</h2>
        <div className="login-social-container ">
          <Stack gap={3}>
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
          </Stack>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="email"
              placeholder="Email"
              value={user.email}
              name="email"
              onChange={handleChange}
              required
              className="mb-2 mt-2"
            />
            <Form.Control
              type="password"
              placeholder="Contraseña"
              value={user.password}
              name="password"
              onChange={handleChange}
              required
            />
            <Form.Group>
              <Form.Check type="checkbox" label="Recordarme" />
              <Form.Text className="text-muted">
                <a href="/login">¿Olvido su contraseña?</a>
              </Form.Text>
            </Form.Group>
            <br />
            <p id="errorMessage"></p>
            <Button variant="secondary" type="submit" className="">
              Iniciar sesión
            </Button>
          </Form>
        </div>
        <br />
        <span>
          ¿Aún no tenes usuario? <a href="/registro">Regístrate!</a>
        </span>
      </div>
    </div>
  );
};

export default Login;
