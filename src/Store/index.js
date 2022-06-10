import { configureStore } from '@reduxjs/toolkit'
import pokemonReducer from '../Store/pokemons/'

export default configureStore({
    reducer: {
        pokemon: pokemonReducer
    }
})
