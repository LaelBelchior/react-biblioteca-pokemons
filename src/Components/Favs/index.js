import React from 'react'
import './style.css'
import { useSelector } from 'react-redux'

function Favs(){

    const favs = useSelector((state) => state.pokemons)

    return(
        <div>
            
        </div>
    )
}

export default Favs;