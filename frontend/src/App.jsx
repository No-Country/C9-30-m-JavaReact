import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import AuthProvider from "./context/AuthContext";
import Favoritepag from "./context/FavoriteContext";
import "./styles/App.scss";
import Favorites from "./views/Favorites";
import Home from "./views/Home";
import Login from "./views/Login";
import Perfil from "./views/Perfil";
import Registro from "./views/Registro";

function App() {
  return (
    <div className="App">
       <Favoritepag>
      <AuthProvider>
        <AppNavbar />
        <Container>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registro" element={<Registro />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </AuthProvider>
      </Favoritepag>
    </div>
  );
}

export default App;
