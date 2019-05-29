
import React from "react";
import "./style.css";

function CharacterCard(props) {
  return (

      <div className="col-md-3">

        <div className="card" data-clicked={props.clicked} onClick={() => props.imageClick(props.character)}>

          <div className="img-container">

            <img alt={props.alt} src={props.image} />

          </div>

          <div className="content">

            <strong>{props.name}</strong>

          </div>

        </div>

      </div>

  );
}

export default CharacterCard;
