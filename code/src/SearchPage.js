import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";
import { useHistory } from "react-router";

function SearchPage() {
  const history = useHistory();
  return (
    <div className="searchpage">
      <div className="searchPage__info">
        <Button variant="outlined" onClick={() => history.push("/Least Crowded")}
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
        <Button variant="outlined" onClick={() => history.push("/Meeting Rooms")}
        >
          Meeting Rooms
        </Button>
      </div>

      <SearchResult
        img="media\Library\IMG_3612.JPG"
        location="Galvin Library"
        star={4.0}
        address="35 West 33rd Street"
        f1="Computers"
        f2="Outlets"
        f3="Whiteboards"
      />

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
        img="media\MSV\IMG_3633.JPG"
        location="McCormick Student Village"
        star={3.7}
        address="3241 S. Wabash Ave"
        f1="Computers"
        f2="Vending Machines"
        f3="Power Outlets"
      />

      <SearchResult
        img="media\MTCC\IMG_3596.JPG"
        location="McCormick Tribune Campus Center"
        star={2.0}
        address="3201 S. State Street"
        f1="Computers"
        f2="Food"
        f3="Printers"
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
        f3="Tables"
      />

      <SearchResult
        img="media\RettaliataEngineeringCenter\IMG_3595.JPG"
        location="John T. Rettaliata Engineering Center"
        star={3.8}
        address="10 West 32nd Street"
        f1="Couches"
        f2="Wireless Displays"
        f3="Whiteboards"
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

export default SearchPage;
