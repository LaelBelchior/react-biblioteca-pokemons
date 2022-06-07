import React, {useState} from 'react';
import './style.css';

function Searchbar(props) {

    const {onSearch} = props
    const [pokemon, setPokemon] = useState('');

    function handlerPokemon(e){
        setPokemon(e.target.value)
    }

    function handlerButton(){
        onSearch(pokemon)
    }

    return (
        <div className='searchbar--container'>
            <div className='searchbar'>
                <input name='input-search' placeholder='Busque por um Pokemon' onChange={handlerPokemon}/>
            </div>
            <div className='searchbar--button'>
                <button onClick={handlerButton}>Procurar</button>
            </div>
        </div>
    )
}

export default Searchbar;