import React, {useState} from 'react';

function Searchbar() {

    const [pokemon, setPokemon] = useState('');

    function handlePokemon(e){
        setPokemon(e.target.value)
    }

    return (
        <div className='searchbar--container'>
            <div className='searchbar'>
                <input name='input-search' placeholder='Busque por um Pokemon' onChange={handlePokemon}/>
            </div>
        </div>
    )
}

export default Searchbar;