import "./App.css";
import Home from "./components/Home";
import Pokemons from "./components/Pokemons";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemons" element={<Pokemons />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
