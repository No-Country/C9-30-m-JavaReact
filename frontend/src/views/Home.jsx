import React from "react";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <a href="/login">
        <Button variant="primary">Login</Button>
      </a>{" "}
      <a href="/registro">
        <Button variant="primary">Registro</Button>
      </a>
    </div>
  );
};

export default Home;
