import React, { useState } from 'react';
import './style.css';
import {searchAllPokemon} from '../../api';

function ListPokemons(){

    const [pokemons, setPokemons] = useState([])

    return(
        <div className='LP-container'>
            <div className='LP-header'>
                <h1></h1>
            </div>
            <div className='LP-body'>
                
            </div>
        </div>
    )
}

export default ListPokemons;