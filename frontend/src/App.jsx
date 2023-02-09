import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import "./styles/App.scss";
import Home from "./views/Home";
import Login from "./views/Login";
import Registro from "./views/Registro";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
