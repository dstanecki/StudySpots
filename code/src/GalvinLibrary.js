import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "./Location.css";

function GalvinLibrary({ name, img, facilities }) {
  const history = useHistory();
  return (
    <div className="locationPage">
      <div className="nameBox">
        <h1>Galvin Library</h1>
      </div>
      <div className="reserveButton">
        <Button onClick={() => history.push("/reserve")} variant="outlined">RESERVE NOW</Button>
      </div>

      <div className="image">
        <img src={process.env.PUBLIC_URL + "/media/Library/IMG_3623.JPG"} />
      </div>

      <div className="facilities">
        <h2>Facility Features:</h2>
        <p>Computers</p>
        <p>Power Outlets</p>
        <p>Whiteboards</p>
      </div>
    </div>
  );
}

export default GalvinLibrary;
