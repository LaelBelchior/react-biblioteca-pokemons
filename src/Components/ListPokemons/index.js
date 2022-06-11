import React, { useState } from "react";
import "./style.css";
import CardListPokemons from "../CardListPokemons";
import Pagination from "../Pagination";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon, removePokemon } from "../../Store/pokemons/";

function ListPokemons(props) {
  const { pokemons, fetch, page, totalPages, setPage } = props;
  const favs = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
  const [clickButton, setClickButton] = useState(1);

  function onLeftClickHandler() {
    if (page > 0) {
      setPage(page - 1);
    }
  }

  function onRighrClickHandler() {
    if (page !== totalPages) {
      setPage(page + 1);
    }
  }

  function addPokemonFav(pokemon) {
    setClickButton(clickButton + 1);
    const updateFavorites = [...favs];
    const favoriteIndex = updateFavorites.indexOf(pokemon);
    if (favoriteIndex < 0){
      dispatch(addPokemon(pokemon));
    }

    if(clickButton % 2 === 0)
    removePokemonFromList(pokemon.id);
  }

  function removePokemonFromList(pokemon) {
    dispatch(removePokemon(pokemon));
  }

  return (
    <div className="LP-container">
      <div className="LP-header">
        <h1></h1>
        <Pagination
          page={page + 1}
          totalPages={totalPages}
          onLeftClick={onLeftClickHandler}
          onRightClick={onRighrClickHandler}
        />
      </div>
      <div className="LP-body-container">
        {fetch ? null : (
          <div className="LP-body">
            {pokemons &&
              pokemons.map((pokemon, index) => {
                return (
                  <div key={index}>
                    <CardListPokemons
                      name={pokemon.name}
                      image={pokemon.sprites.front_default}
                      weight={pokemon.weight}
                      type={pokemon.types[0].type.name}
                      id={pokemon.id}
                      pokemon={pokemon}
                      addPokemonFav={addPokemonFav}
                    />
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
}

export default ListPokemons;
