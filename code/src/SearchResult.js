import React from "react";
import "./SearchResult.css";
import { useHistory } from "react-router-dom";

function SearchResult({ img, location, star, address, f1, f2, f3 }) {
  const history = useHistory();

  function handleOnClick(location) {
    console.log("/" + Object.values(location));
    history.push("/" + Object.values(location));
  }

  return (
    <div className="searchResult" onClick={() => handleOnClick({ location })}>
      <img src={process.env.PUBLIC_URL + img} alt="" />

      {/* <FavoriteBorderIcon className="searchResult__heart" /> */}

      <div className="seacrhResult__info">
        <div className="searchResult__infoTop">
          <h1>{location}</h1>
          <h3>{address}</h3>
        </div>
        <div className="searchResult__infoBottom">
          <div className="searchResult__stars">
            <p>
              <strong>{star} ★</strong>
            </p>
          </div>
          <div className="searchResult__facilities">
            <p>{f1}</p>
            <p>{f2}</p>
            <p>{f3}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
