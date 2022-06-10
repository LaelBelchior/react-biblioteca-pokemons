import React from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import CardListPokemons from "../CardListPokemons";
import { removePokemon } from '../../Store/pokemons/'

function Favs() {
  const favs = useSelector((state) => state.pokemon);
  const dispatch = useDispatch()

  function removePokemonId(id){
    dispatch(removePokemon(id))
  }

  return (
    <div className="favs-container">
      <div>
        {favs.length == 0 ? (
          <div className="favs-empty">
            <h1>Sem favoritos até agora</h1>
          </div>
        ) : (
          <div className="favs-pokemon-container">
            {favs.map((pokemon, index) => {
              return (
                <div  className="favs-pokemon" key={index}>
                  <CardListPokemons
                    name={pokemon.name}
                    image={pokemon.sprites.front_default}
                    weight={pokemon.weight}
                    type={pokemon.types[0].type.name}
                    id={pokemon.id}
                  />
                  <button className="button-delete" onClick={() => removePokemonId(pokemon.id)}>🗑️</button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Favs;
