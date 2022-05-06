import React from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Banner() {
  const history = useHistory();

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/media/iitfall.jpg"
        })`,
      }}
    >
      <div className="banner__search">

        <Button
          onClick={() => history.push("/reserve")}
          className="banner__searchButton"
          variant="outlined"
        >
          Reserve!
        </Button>
      </div>
      <div className="banner__info">
        <h1>Reserve a study spot now!</h1>
        <Button onClick={() => history.push("/search")} variant="outlined">
          Explore!
        </Button>
      </div>
    </div>
  );
}

export default Banner;
