import React from "react";
import "./style.css";
import CardListPokemon from '../CardListPokemons';

function ListPokemons(props) {
  const { pokemons, fetch } = props;

  return (
    <div className="LP-container">
      <div className="LP-header">
        <h1></h1>
      </div>
      <div className="LP-body">
        {fetch ? null :
            <div>
                {pokemons.map((pokemon, index) => {
                    return(
                    <div>
                        <CardListPokemon />
                    </div>)
                })}
            </div>}    
      </div>
    </div>
  );
}

export default ListPokemons;
