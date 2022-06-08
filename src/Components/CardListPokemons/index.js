import React from 'react';
import './style.css';

function CardListPokemons(props){

    const fav =  "♥"

    return(
        <div className='card-list'>
            <div className='card-list_img'>
                <img alt={props.name} src={props.image}/>
            </div>
            <div className='card-list_texts'>
                <h1>{props.name}</h1>
                <p>{props.weight}</p>
            </div>
            <div className='card-list_type'>
                {props.type}
            </div>
            <button className='card-list_button'>{fav}</button>
        </div>
    )
}

export default CardListPokemons;