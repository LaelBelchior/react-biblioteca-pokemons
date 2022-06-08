import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Searchbar from './Components/Searchbar';
import ListPokemons from './Components/ListPokemons';
import { searchAllPokemon } from './api';

function App() {

  const [pokemons, setPokemons] = useState([])
  const [fetch, setFetch] = useState(false)

  const searchPokemons = async () => {
    try {
      setFetch(true)
      const result = await searchAllPokemon()
      setPokemons(result)
      setFetch(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    searchPokemons()
  }, [])

  return (
    <div>
      <Navbar />
      <Searchbar />
      <ListPokemons pokemons={pokemons} fetch={fetch}/>
    </div>
  );
}

export default App;
