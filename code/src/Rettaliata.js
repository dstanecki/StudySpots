import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "./Location.css";

function Rettaliata({ name, img, facilities }) {
  const history = useHistory();
  return (
    <div className="locationPage">
      <div className="subHeader">
        <div className="nameBox">
          <h1>John T. Rettaliata Engineering</h1>
        </div>
        <div className="reserveButton">
          <Button onClick={() => history.push("/reserve")} variant="outlined">RESERVE NOW</Button>
        </div>
      </div>

      <div className="image">
        <img
          src={
            process.env.PUBLIC_URL +
            "/media/RettaliataEngineeringCenter/IMG_3593.JPG"
          }
        />
      </div>

      <div className="rightColumn">
        <div className="facilities">
          <h2>Facility Features:</h2>
          <p>Couches</p>
          <p>Wireless Displays</p>
          <p>Whiteboards</p>
        </div>

        {/* <div className="map">
          <img src="https://flownform.com/public/floorplan_floormap.png" />
        </div> */}
      </div>
    </div>
  );
}

export default Rettaliata;
