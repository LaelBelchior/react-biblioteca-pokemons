import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card">
      <img src={props.img} />
      <div className="card-texts">
        <h1>{props.name}</h1>
        <p>{props.weight}lbs</p>
      </div>
      <div className="card-descriptions">
        <p id="power"><strong>Power:</strong> {props.power}</p>
        <p id="effect"><strong>Effect:</strong> {props.effect}</p>
        <p id="damage"><strong>Damage:</strong> {props.damage}</p>
      </div>
    </div>
  );
}

export default Card;
