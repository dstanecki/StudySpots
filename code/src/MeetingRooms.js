import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";
import { useHistory } from "react-router-dom";

function MeetingRooms() {
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
        img="media\Library\IMG_3612.JPG"
        location="Galvin Library"
        star={4.0}
        address="35 West 33rd Street"
        f1="Computers"
        f2="Outlets"
        f3="Whiteboards"
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
    </div>
  );
}

export default MeetingRooms;
