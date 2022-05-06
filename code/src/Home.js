import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          img="media\MSV\IMG_3633.JPG"
          title="McCormick Student Village"
          description="MSV offers a variety of options close to student housing"
        />
        <Card
          img="media\Library\IMG_3612.JPG"
          title="Galvin Library"
          description="The libary offers both quiet and cooperative study spaces"
        />
        <Card
          img="media\MTCC\IMG_3596.JPG"
          title="McCormick Tribune Campus Center"
          description="MTCC offers great places to grab food to enjoy while you study"
        />
      </div>

      <div className="home__section">
        <Card
          img="media\RettaliataEngineeringCenter\IMG_3595.JPG"
          title="John T. Rettaliata Engineering Center"
          description="A colorful open location to work creatively"
        />
        <Card
          img="media\IIT_Tower\IMG_3626.JPG"
          title="IIT Tower First Floor"
          description="Have a class in IIT Tower and want to stay close? The first floor is perfect"
        />
        <Card
          img="media\Technology_Park\TechnologyPark.jpg"
          title="Technology Park"
          description="Looking for somewhere different with an open space? Look no further!"
        />
      </div>
    </div>
  );
}

export default Home;
