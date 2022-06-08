import React, {useState} from 'react';
import {searchPokemon} from '../../api';
import Card from '../Card';
import './style.css';

function Searchbar() {

    const [search, setSearch] = useState('')
    const [pokemon, setPokemon] = useState('')

    function handlerSearch(e){
        setSearch(e.target.value)
    }

    function handlerButton(){
        onSearchHandler(search)
    }

    const onSearchHandler = async (pokemon) => {
        const result = await searchPokemon(pokemon)
        setPokemon(result)
    }

    return (
        <div className='searchbar--container'>
            <div className='searchbar'>
                <input name='input-search' placeholder='Busque por um Pokemon' onChange={handlerSearch}/>
            </div>
            <div className='searchbar--button'>
                <button onClick={handlerButton}>Procurar</button>
            </div>
            {pokemon ? (
                <Card 
                img={pokemon.sprites.front_default}
                name={pokemon.name}
                weight={pokemon.weight}
                powerOne='bbbb'
                textOne='aaa'
                powerTwo='cccc'
                textTwo='dddd'
                />
            ) : null}
        </div>
    )
}

export default Searchbar;