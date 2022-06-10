const INITIAL_STATE = []

export default function reducer(state = INITIAL_STATE, action ){
    if(action.type == "ADD_POKEMON"){
        return [...state, action.pokemon]
    }

    return state
}

export const addPokemon = pokemon => {
    return {
        type: "ADD_POKEMON",
        pokemon
    }
}