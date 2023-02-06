import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      <h2>Inicia sesión</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Control
          type="email"
          placeholder="Email"
          value={user.email}
          name="email"
          onChange={handleChange}
        />
        <Form.Control
          type="password"
          placeholder="Contraseña"
          value={user.password}
          name="password"
          onChange={handleChange}
        />
        <Form.Group>
          <Form.Check type="checkbox" label="Recordarme" />
          <Form.Text className="text-muted">
            <a href="/login">¿Olvido su contraseña?</a>
          </Form.Text>
        </Form.Group>
        <br />
        <Button variant="secondary" type="submit">
          Iniciar sesión
        </Button>
      </Form>
      <br />
      <span>
        ¿Aún no tenes usuario? <a href="/registro">Regístrate!</a>
      </span>
    </div>
  );
};

export default Login;
