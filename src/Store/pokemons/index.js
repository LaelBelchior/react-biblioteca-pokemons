import { createAction, createReducer } from "@reduxjs/toolkit"
const INITIAL_STATE = []

export const addPokemon = createAction("ADD_POKEMON")
export const removePokemon = createAction("REMOVE_POKEMON")

export default createReducer(INITIAL_STATE, {
    [addPokemon.type]: (state, action) => [...state, action.payload],
    [removePokemon.type]: (state, action) => state.filter(item => item.id !== action.payload)
})