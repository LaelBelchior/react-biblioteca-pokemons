import React, { useState } from "react";
import { searchPokemon, searchPowerPokemon, searchImagePokemon } from "../../api";
import Card from "../Card";
import "./style.css";

function Searchbar() {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState("");
  const [power, setPower] = useState("");
  const [damage, setDamage] = useState("");
  const [effect, setEffect] = useState("");
  const [image, setImage] = useState("");

  function handlerSearch(e) {
    setSearch(e.target.value);
  }

  const handlerButton = async () => {
    onSearchHandler(search);
  };

  const onSearchHandler = async (pokemon) => {
    const result = await searchPokemon(pokemon);
    capturePower(result.id);
    captureImage(result.id)
    setPokemon(result);
  };

  const captureImage = async (pokemon) => {
    const result = await searchImagePokemon(pokemon)
    setImage(result)
  }

  const capturePower = async (pokemon) => {
    const result = await searchPowerPokemon(pokemon);
    const power = result.effect_entries[0].short_effect;
    const damage = result.damage_class.name;
    const effect = result.effect_entries[0].effect;
    setDamage(damage);
    setEffect(effect);
    setPower(power);
  };

  return (
    <div className="searchbar--container">
      <div className="searchbar--inputs">
        <div className="searchbar">
          <input
            name="input-search"
            placeholder="Busque por um Pokemon"
            onChange={handlerSearch}
          />
        </div>
        <div className="searchbar--button">
          <button type="button" onClick={handlerButton}>
            Procurar
          </button>
        </div>
      </div>
      <div className="searchbar-card">
        {pokemon ? (
          <Card
            img={image}
            name={pokemon.name}
            weight={pokemon.weight}
            power={power}
            damage={damage}
            effect={effect}
          />
        ) : null}
      </div>
    </div>
  );
}

export default Searchbar;
