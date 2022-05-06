import "./App.css";
import GoogleLogin from 'react-google-login';
import Home from "./Home";
import Header from "./Header";
import Location from "./Location.js";
import MSV from "./MSV.js";
import GalvinLibrary from "./GalvinLibrary.js";
import MTCC from "./MTCC.js";
import Rettaliata from "./Rettaliata.js";
import Reserve from "./Reserve.js";
import SearchPage from "./SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import IITTower from "./IITTower";
import TechnologyPark from "./TechnologyPark";
import Admin from "./Admin";
import Wishnick from "./Wishnick.js";
import Perlstein from "./Perlstein.js";
import Seigel from "./Seigel.js";
import LeastCrowded from "./LeastCrowded.js";
import Sofas from "./Sofas.js";
import Private from "./Private.js";
import GroupStudy from "./GroupStudy.js";
import MeetingRooms from "./MeetingRooms.js";

function App() {
  
  //const [user, setUser] = useState(null);
  //console.log(user);

  return (
    <div className="App">
    <header className="App-header">
      </header>
      <Router>
        <Header />

        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>

          <Route path="/search">
            <SearchPage />
          </Route>

          <Route path="/location">
            <Location />
          </Route>

          <Route path="/reserve">
            <Reserve />
          </Route>

          <Route path="/Technology Park">
            <TechnologyPark />
          </Route>

          <Route path="/IIT Tower First Floor">
            <IITTower />
          </Route>

          <Route path="/John T. Rettaliata Engineering Center">
            <Rettaliata />
          </Route>

          <Route path="/McCormick Tribune Campus Center">
            <MTCC />
          </Route>

          <Route path="/Galvin Library">
            <GalvinLibrary />
          </Route>

          <Route path="/McCormick Student Village">
            <MSV />
          </Route>

          <Route path="/Wishnick Hall">
            <Wishnick />
          </Route>

          <Route path="/Perlstein Hall">
            <Perlstein />
          </Route>

          <Route path="/Seigel Hall">
            <Seigel />
          </Route>

          <Route path="/Least Crowded">
            <LeastCrowded />
          </Route>

          <Route path="/Sofas">
            <Sofas />
          </Route>

          <Route path="/Private">
            <Private />
          </Route>

          <Route path="/Group Study">
            <GroupStudy />
          </Route>

          <Route path="/Meeting Rooms">
            <MeetingRooms />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
