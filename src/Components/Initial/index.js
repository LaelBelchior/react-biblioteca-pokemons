import React from 'react';
import './style.css';
import pokemon from '../../Assets/pokemon.jpg';

function Initial(){
    return(
        <div className='initial-container'>
            <img src={pokemon} />
        </div>
    )
}

export default Initial;