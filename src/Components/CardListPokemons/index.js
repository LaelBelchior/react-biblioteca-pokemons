import React from 'react';
import './style.css';

function CardListPokemons(props){
    return(
        <div className='card-list'>
            <img alt={props.name} src={props.image}/>
            <div className='card-list_texts'>
                <h1>{props.name}</h1>
                <p>{props.weight}</p>
            </div>
        </div>
    )
}

export default CardListPokemons;