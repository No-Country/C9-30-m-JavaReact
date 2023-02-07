import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { loginUser } from "../petitions.js";
import { useNavigate } from "react-router-dom";
import { useReducer } from "react";
import "../styles/Home.css";


const Login = () => {
  const navigate = useNavigate();
  
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    
    loginUser(user)
      .then((response) => {
        console.log(response.data.status)
        if (response.status === 201) {
          navigate("/");
        }
  })
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="containerLogin">
      <h2>Inicia sesión</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Control
          type="email"
          placeholder="Email"
          value={user.email}
          name="email"
          onChange={handleChange}
          required
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
