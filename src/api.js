export const searchPokemon = (pokemon) => {
    try {
        const response = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        return response.json()
    } catch (error) {
        console.log(error)
    }
}