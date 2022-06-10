import { configureStore, combineReducers } from '@reduxjs/toolkit'
import pokemonReducer from '../Store/pokemons/'

const rootReducer = combineReducers({
    pokemons: pokemonReducer,
})

export default configureStore(rootReducer)
