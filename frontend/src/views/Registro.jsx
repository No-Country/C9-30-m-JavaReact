import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import {createUser, getUsers} from "../petitions"
import { useNavigate } from "react-router-dom";



const Registro = () => {
  const navigate = useNavigate();
  const [newuser, setNewUser] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const getUserMock = () => {
    getUsers()
      .then((res) => {
        setNewUser(res.data);
      })
      .catch((err) => console.log(err));
  };
  
  useEffect(() => {
    getUserMock();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(newuser)
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
 }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newuser, [name]: value });
  };

  return (
    <div>
      <h2>Registrate con tu email</h2>
      <br />
      <Form onSubmit={handleSubmit}>
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

        <Button variant="secondary" type="submit"  onClick={handleSubmit}>
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
