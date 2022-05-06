import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "./Location.css";

function Location({ name, img, facilities }) {
  return (
    <div className="locationPage">
      <div className="subHeader">
        <div className="nameBox">
          <h1>location page</h1>
        </div>
        <div className="reserveButton">
          <Button variant="outlined">RESERVE NOW</Button>
        </div>
      </div>

      <div className="image">
        <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c29mYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
      </div>

      <div className="rightColumn">
        <div className="facilities">
          <p>facility</p>
          <p>facility</p>
          <p>facility</p>
        </div>

        <div className="map">
          <img src="https://flownform.com/public/floorplan_floormap.png" />
        </div>
      </div>

      <div className="reviews">
        <h1>Student Reviews!</h1>
        <p>____________________________</p>
        <p>This is a review</p>
        <p>____________________________</p>
        <p>This is a review</p>
      </div>
    </div>
  );
}

export default Location;
