import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppNavbar from "./components/AppNavbar";
import Footer from "./components/Footer";

import AuthProvider from "./context/AuthContext";
import FavoriteProvider from "./context/FavoriteContext";

import Favorites from "./views/Favorites";
import Home from "./views/Home";
import Login from "./views/Login";
import Profile from "./views/Profile";
import Register from "./views/Register";
import Campaign from "./views/Campaign";

import { Container } from "react-bootstrap";
import "./styles/App.scss";
import Search from "./views/Search";
import SearchNewst from "./components/Searchs/SearchNewst";
import SearchPopulars from "./components/Searchs/SearchPopular";
import SearchProducts from "./components/Searchs/SearchProduct";
import SearchService from "./components/Searchs/SearchService";
import SearchnearGoal from "./components/Searchs/SearchAleatorio";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <FavoriteProvider>
          <AppNavbar />
          <Container>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registro" element={<Register />} />
                <Route path="/perfil" element={<Profile />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/campania/:id" element={<Campaign />} />
                <Route path="/buscar" element={<Search />} />
                <Route path="/buscar/recientes" element={<SearchNewst />} />
                <Route path="/buscar/populares" element={<SearchPopulars />} />
                <Route path="/buscar/productos" element={<SearchProducts />} />
                <Route path="/buscar/servicios" element={<SearchService />} />
                <Route path="/buscar/aleatorios" element={<SearchnearGoal/>} />
              </Routes>
            </BrowserRouter>
          </Container>
        </FavoriteProvider>
      </AuthProvider>
      <br />
      <Footer />
    </div>
  );
}

export default App;
