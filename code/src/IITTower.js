import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "./Location.css";

function IITTower({ name, img, facilities }) {
  const history = useHistory();
  return (
    <div className="locationPage">
      <div className="subHeader">
        <div className="nameBox">
          <h1>IIT Tower First Floor</h1>
        </div>
        <div className="reserveButton">
          <Button onClick={() => history.push("/reserve")} variant="outlined">RESERVE NOW</Button>
        </div>
      </div>

      <div className="image">
        <img 
          src={
            process.env.PUBLIC_URL + 
            "media/IIT_Tower/IMG_3628.JPG"
            }
         />
      </div>

      <div className="rightColumn">
        <div className="facilities">
          <h2>Facility Features:</h2>
          <p>Couches</p>
          <p>Tables</p>
          <p>Coffee Shop</p>
        </div>

        {/* <div className="map">
          <img src="https://flownform.com/public/floorplan_floormap.png" />
        </div> */}
      </div>
    </div>
  );
}

export default IITTower;
