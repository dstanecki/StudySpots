import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";
import { useHistory } from "react-router";

function LeastCrowded() {
  const history = useHistory();
  return (
    <div className="searchpage">
      <div className="searchPage__info">
        <Button
          variant="outlined"
          onClick={() => history.push("/Least Crowded")}
        >
          Least Crowd
        </Button>
        <Button variant="outlined" onClick={() => history.push("/Sofas")}>
          Sofas
        </Button>
        <Button variant="outlined" onClick={() => history.push("/Private")}>
          Private
        </Button>
        <Button variant="outlined" onClick={() => history.push("/Group Study")}>
          Group Study
        </Button>
        <Button
          variant="outlined"
          onClick={() => history.push("/Meeting Rooms")}
        >
          Meeting Rooms
        </Button>
      </div>
      <SearchResult
        img="media\IIT_Tower\IMG_3626.JPG"
        location="IIT Tower First Floor"
        star={3.5}
        address="10 West 35th Street"
        f1="Couches"
        f2="Tables"
        f3="Coffee Shop"
      />

      <SearchResult
        img="media\Perlstein\IMG_3600.JPG"
        location="Perlstein Hall"
        star={3.2}
        address="10 W 33rd Street"
        f1="Couches"
        f2="Tables"
        f3="Variety"
      />

      <SearchResult
        img="media\Seigel\IMG_3607.JPG"
        location="Seigel Hall"
        star={3.0}
        address="3301 S. Dearborn Street"
        f1="Natural Lighting"
        f2="Couches"
        f3="Table"
      />

      <SearchResult
        img="media\Technology_Park\TechnologyPark.jpg"
        location="Technology Park"
        star={3.5}
        address="3440 S Dearborn Street"
        f1="Natural Lighting"
        f2="Tables"
        f3="Chairs"
      />

      <SearchResult
        img="/media/Wishnick/IMG_3584.JPG"
        location="Wishnick Hall"
        star={2.5}
        address="3255 S Dearborn Street"
        f1="Natural Lighting"
        f2="Tables"
        f3="Chairs"
      />
    </div>
  );
}

export default LeastCrowded;
