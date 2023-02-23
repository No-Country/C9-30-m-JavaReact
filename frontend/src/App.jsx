import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import Footer from "./components/Footer";
import AuthProvider from "./context/AuthContext";
import Favoritepag from "./context/FavoriteContext";
import "./styles/App.scss";
import Favorites from "./views/Favorites";
import Home from "./views/Home";
import Login from "./views/Login";
import Perfil from "./views/Perfil";
import Registro from "./views/Registro";
import Campaigns from "./views/Campaigns";
import Searchs from "./views/Searchs";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Favoritepag>
          <AppNavbar />
          <Container>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registro" element={<Registro />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/campanias" element={<Campaigns />} />
                <Route path="/buscarcampañas" element={< Searchs />} />
              </Routes>
            </BrowserRouter>
          </Container>
        </Favoritepag>
      </AuthProvider>
      <br />
      <Footer />
    </div>
  );
}

export default App;
