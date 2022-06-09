export const searchPokemon = async (pokemon) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    const response = await fetch(url)
    return await response.json()
  } catch (error) {
   console.log(error)   
  }
}

export const searchAllPokemon = async (limit = 50, offset = 0) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    const response = await fetch(url)
    return await response.json()
  } catch (error) {
   console.log(error)   
  }
}

export const searchPokemonData = async (url) => {
  try {
    const response = await fetch(url)
    return await response.json()
  } catch (error) {
   console.log(error)   
  }
}

export const searchPowerPokemon = async (id) => {
  try {
    let url = `https://pokeapi.co/api/v2/move/${id}/`
    const response = await fetch(url)
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

export const searchImagePokemon = async (id) => {
    let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
    const response = await fetch(url)
    return response.blob()
      .then(result => {
        const imgURL = URL.createObjectURL(result)
        return imgURL
      })
}


