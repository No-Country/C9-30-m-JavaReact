import React from "react";
import { useAuth } from "../context/AuthContext";

const Perfil = () => {
  const { user } = useAuth();
  return <h2>Hola que tal {user.email} </h2>;
};

export default Perfil;
