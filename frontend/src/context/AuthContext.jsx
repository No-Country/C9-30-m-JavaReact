import { createContext, useContext, useState } from "react";
import { validateUser } from "../petitions";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("No auth provider");
  return context;
};

function AuthProvider({ children }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const login = async (userData) => {
    const valid = await validateUser(userData);
    valid ? setUser(userData) : alert("Usuario/contraseña incorrecta");
  };

  return (
    <authContext.Provider value={{ login, user }}>
      {children}
    </authContext.Provider>
  );
}

export default AuthProvider;
