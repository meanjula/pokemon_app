import "./App.css";
import Home from "./Pages/Home";
import Pokemons from "./Pages/Pokemons";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import PokemonSingle from "./components/PokemonSingle";
import React, { useEffect, useState } from "react";
import Favlist from "./components/Favlist";

function App() {
  const [favourites, setFavourites] = useState([]);
  //storing fave pokemon in local storage

  const getArray = JSON.parse(localStorage.getItem("favourites") || "0");
  useEffect(() => {
    if (getArray !== 0) {
      setFavourites(getArray);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const favHandler = (pokemon) => {
    let item = favourites.some((item) => item.id === pokemon.id);
    if (!item) {
      setFavourites((prevState) => [...prevState, pokemon]);
      localStorage.setItem(pokemon.name, JSON.stringify(pokemon));
    } else {
      const newArray = [...favourites];
      newArray.splice(
        newArray.findIndex((item) => item.id === pokemon.id),
        1
      );
      setFavourites(newArray);
      console.log(newArray); // if no favourites will be empty
      //     // localStorage.removeItem(pokemon.name);
    }
    console.log(favourites);
  };
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="pokemons"
              element={
                <Pokemons favHandler={favHandler} favourites={favourites} />
              }
            />
            <Route
              path="favourites"
              element={
                <Favlist favHandler={favHandler} favourites={favourites} />
              }
            />
            <Route path="/:pokemonName" element={<PokemonSingle />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
