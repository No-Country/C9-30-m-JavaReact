import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Registro = () => {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    console.log(user.repeatPassword !== user.password ? true : false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      <h2>Registrate con tu email</h2>
      <br />
      <Form onSubmit={handleSubmit}>
        <Form.Control
          type="text"
          name="name"
          value={user.name}
          placeholder="Nombre"
          onChange={handleChange}
        />
        <Form.Control
          type="text"
          name="surname"
          value={user.surname}
          placeholder="Apellido"
          onChange={handleChange}
        />
        <Form.Control
          type="email"
          name="email"
          value={user.email}
          placeholder="Email"
          onChange={handleChange}
        />
        <Form.Control
          type="password"
          name="password"
          value={user.password}
          placeholder="Contraseña"
          onChange={handleChange}
        />
        <Form.Control
          type="password"
          name="repeatPassword"
          value={user.repeatPassword}
          placeholder="Repetir contraseña"
          onChange={handleChange}
        />

        <Button variant="secondary" type="submit">
          Crear cuenta
        </Button>
        <br />
        <Form.Text className="text-muted">
          *Al registrarte, aceptas nuestras{" "}
          <strong>Condiciones de Servicio</strong> y reconoces haber leído
          nuestra <strong>Política de Privacidad</strong>
        </Form.Text>
      </Form>
      <br />
      <span>
        Estas registrado? <a href="/login">inicia sesion!</a>
      </span>
    </div>
  );
};

export default Registro;
