import React from "react";
import "./style.css";
import CardListPokemon from '../CardListPokemons';
import Pagination from "../Pagination";

function ListPokemons(props) {
  const { pokemons, fetch, page, totalPages, setPage } = props;

  function onLeftClickHandler(){
    if(page > 0){
      setPage(page - 1)
    }
  }

  function onRighrClickHandler(){
    if(page !== totalPages){
      setPage(page + 1)
    }
  }
  
  return (
    <div className="LP-container">
      <div className="LP-header">
        <h1></h1>
        <Pagination 
        page={page+1}
        totalPages={totalPages}
        onLeftClick={onLeftClickHandler}
        onRightClick={onRighrClickHandler}
        />
      </div>
      <div className="LP-body-container">
        {fetch ? null :
            <div className="LP-body">
                {pokemons && pokemons.map((pokemon, index) => {
                    return(
                    <div key={index}>
                        <CardListPokemon 
                        name={pokemon.name}
                        image={pokemon.sprites.front_default}
                        weight={pokemon.weight}
                        type={pokemon.types[0].type.name}
                        id={pokemon.id}
                        />
                    </div>)
                })}
            </div>}    
      </div>
    </div>
  )
}

export default ListPokemons;
