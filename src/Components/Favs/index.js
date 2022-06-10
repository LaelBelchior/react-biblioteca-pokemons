import React from "react";
import "./style.css";
import { useSelector } from "react-redux";
import CardListPokemons from "../CardListPokemons";

function Favs() {
  const favs = useSelector((state) => state.pokemon);

  return (
    <div className="favs-container">
      <div>
        {favs.length == 0 ? (
          <div>
            <h1>Sem favoritos até agora</h1>
          </div>
        ) : (
          <div>
            {favs.map((pokemon, index) => {
              return (
                <div key={index}>
                  <CardListPokemons
                    name={pokemon.name}
                    image={pokemon.sprites.front_default}
                    weight={pokemon.weight}
                    type={pokemon.types[0].type.name}
                    id={pokemon.id}
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

export default Favs;
