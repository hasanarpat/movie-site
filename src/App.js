import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import NavbarCom from "./components/mainPage/NavbarCom";
import Footer from "./components/mainPage/Footer";
import Main from "./components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import MovieDetails from "./components/movieDetails/MovieDetails";
function App() {
  const [signed, setSigned] = useState(true);
  return (
    <Router>
      <div className="App ">
        <Container className="col-md-9 main" style={{ marginTop: "4rem" }}>
          <NavbarCom />
          <br />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
          <Footer />
        </Container>
      </div>
    </Router>
  );
}

export default App;
