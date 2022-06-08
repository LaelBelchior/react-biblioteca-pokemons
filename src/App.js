import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Searchbar from './Components/Searchbar';
import ListPokemons from './Components/ListPokemons';

function App() {
  return (
    <div>
      <Navbar />
      <Searchbar />
      <ListPokemons />
    </div>
  );
}

export default App;
