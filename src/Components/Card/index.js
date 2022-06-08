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
        <h4>{props.powerOne}</h4>
        <p>{props.textTwo}</p>
        <h4>{props.powerTwo}</h4>
        <p>{props.textTwo}</p>
      </div>
    </div>
  );
}

export default Card;
