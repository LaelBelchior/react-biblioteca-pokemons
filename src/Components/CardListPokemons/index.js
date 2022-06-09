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
                <div className='card-list_texts_inf'>
                    <p>{props.weight} lbs</p>
                    <p id='division'> | </p>
                    <p id='type'>{props.type}</p>
                </div>
                <strong><p id='card-name'>{props.name}</p></strong>
            </div>
            <div className='card-list_type'>
                <strong><p id='id'>#{props.id}</p></strong>
                <button className='card-list_button'>{fav}</button>
            </div>
        </div>
    )
}

export default CardListPokemons;