import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "./Location.css";

function MTCC({ name, img, facilities }) {
  const history = useHistory();
  // const images = [
  //   {
  //     original: "https://picsum.photos/id/1018/1000/600/",
  //     thumbnail: "https://picsum.photos/id/1018/250/150/",
  //     originalHeight: 100,
  //     originalWidth: 100,
  //   },
  //   {
  //     original: "https://picsum.photos/id/1015/1000/600/",
  //     thumbnail: "https://picsum.photos/id/1015/250/150/",
  //     originalHeight: 100,
  //     originalWidth: 100,
  //   },
  //   {
  //     original: "https://picsum.photos/id/1019/1000/600/",
  //     thumbnail: "https://picsum.photos/id/1019/250/150/",
  //     originalHeight: 100,
  //     originalWidth: 100,
  //   },
  // ];

  return (
    <div className="locationPage">
      <div className="subHeader">
        <div className="nameBox">
          <h1>MTCC</h1>
        </div>
        <div className="reserveButton">
          <Button onClick={() => history.push("/reserve")} variant="outlined">RESERVE NOW</Button>
        </div>
      </div>

      <div className="image">
        <img src={process.env.PUBLIC_URL + "/media/MTCC/IMG_3596.JPG"} />
        {/* <ImageGallery items={images} />; */}
      </div>

      <div className="rightColumn">
        <div className="facilities">
          <h2>Facility Features:</h2>
          <p>Computers</p>
          <p>Printers</p>
          <p>Food</p>
        </div>

        {/* <div className="map">
          <img src="https://flownform.com/public/floorplan_floormap.png" />
        </div> */}
      </div>
    </div>
  );
}

export default MTCC;
