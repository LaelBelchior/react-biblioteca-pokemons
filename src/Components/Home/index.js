import React, {useState, useEffect} from 'react';
import './style.css';
import Navbar from '../Navbar';
import Searchbar from '../Searchbar';
import ListPokemons from '../ListPokemons/';
import { searchAllPokemon, searchPokemonData } from '../../api';

function Home() {

  const[page, setPage] = useState(0)
  const[totalPages, setTotalPages] = useState(0)
  const [pokemons, setPokemons] = useState([])
  const [fetch, setFetch] = useState(false)

  const itensPerPage = 25
  const searchPokemons = async () => {
    try {
      setFetch(true)
      const data = await searchAllPokemon(itensPerPage, itensPerPage * page)
      const promises = data.results.map(async (pokemon) => {
        return await searchPokemonData(pokemon.url)
      })
      const result = await Promise.all(promises)
      setPokemons(result)
      setFetch(false)
      setTotalPages(Math.ceil(data.count/itensPerPage))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    searchPokemons()
  }, [page])

  return (
    <div>
      <Navbar />
      <Searchbar />
      <ListPokemons pokemons={pokemons} fetch={fetch} page={page} totalPages={totalPages} setPage={setPage}/>
    </div>
  );
}

export default Home;