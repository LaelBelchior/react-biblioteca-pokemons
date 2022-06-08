import React, { useState, useEffect } from "react";
import "./style.css";
import Searchbar from "../Searchbar";
import ListPokemons from "../ListPokemons/";
import { searchAllPokemon, searchPokemonData } from "../../api";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function Home() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [fetch, setFetch] = useState(false);

  const itensPerPage = 25;
  const searchPokemons = async () => {
    try {
      setFetch(true);
      const data = await searchAllPokemon(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await searchPokemonData(pokemon.url);
      });
      const result = await Promise.all(promises);
      setPokemons(result);
      setFetch(false);
      setTotalPages(Math.ceil(data.count / itensPerPage));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    searchPokemons();
  }, [page]);

  return (
    <Router>
      <div className="home-container">
        <Link className="button-pag" to="/search">
          Procurar por um Pokemon
        </Link>
        <Link className="button-pag" to="/pagination">
          Listar todos os Pokemons
        </Link>
      </div>
      <Routes>
        <Route path="/search" element={<Searchbar />} />
        <Route
          path="/pagination"
          element={
            <ListPokemons
              pokemons={pokemons}
              fetch={fetch}
              page={page}
              totalPages={totalPages}
              setPage={setPage}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default Home;
