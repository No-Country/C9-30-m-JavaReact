import { createContext, useContext, useState } from "react";
import { createUser, loginUser } from "../petitions";

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
    token: "",
  });


  const login = async (userData) => {
    try {
      const userToken = await loginUser(userData);
      setUser({
        email: userData.email,
        password: userData.password,
        token: userToken.jwt,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
  const register = async (newUser) => {
    try {
      const userToken = await createUser(newUser);
    } catch (error) {
      throw new Error(error);
    }
  };


  return (
    <authContext.Provider value={{login, register, user}}>
      {children}
    </authContext.Provider>
  );

  }


export default AuthProvider; 
