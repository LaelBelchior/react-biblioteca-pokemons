import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Searchbar from './Components/Searchbar';
import {searchPokemon} from './api';

const onSearchHandler = async (pokemon) => {
  const result = await searchPokemon(pokemon)
  console.log(result)
}

function App() {
  return (
    <div>
      <Navbar />
      <Searchbar onSearch={onSearchHandler}/>
      <div className='App'></div>
    </div>
  );
}

export default App;
