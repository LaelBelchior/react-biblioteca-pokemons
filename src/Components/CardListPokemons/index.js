import React from 'react';
import { useSelector } from "react-redux"
import './style.css';

function CardListPokemons({name, image, weight, type, id, pokemon, addPokemonFav}){

    const favs = useSelector((state) => state.pokemon);
    const arrayPokemons = [...favs]
    const fav = arrayPokemons.includes(pokemon)? "❤️" : "🖤"


    return(
        <div className='card-list'>
            <div className='card-list_img'>
                <img alt={name} src={image}/>
            </div>
            <div className='card-list_texts'>
                <div className='card-list_texts_inf'>
                    <p>{weight} lbs</p>
                    <p id='division'> | </p>
                    <p id='type'>{type}</p>
                </div>
                <strong><p id='card-name'>{name}</p></strong>
            </div>
            <div className='card-list_type'>
                <strong><p id='id'>#{id}</p></strong>
                <button className='card-list_button' onClick={() => {addPokemonFav(pokemon)}}>{fav}</button>
            </div>
        </div>
    )
}

export default CardListPokemons;