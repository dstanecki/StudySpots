import React from "react";
import "./Card.css";
import { useHistory } from "react-router-dom";

function Card({ img, title, description, price }) {
  const history = useHistory();
  function handleOnClick(title, image) {
    console.log("/" + Object.values(title));
    history.push("/" + Object.values(title));
  }
  return (
    <div className="card" onClick={() => handleOnClick({ title }, { img })}>
      <img src={process.env.PUBLIC_URL + img} alt="" />
      <div className="card__info">
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  );
}

export default Card;
