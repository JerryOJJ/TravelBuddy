import React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";
import ReactMapGl from "react-map-gl";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";
import useStyles from "./style";

const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px)");
  const [viewPort, setViewPort] = useState({
    latitude: 28.6448,
    longitude: 77.216,
    Zoom: 6,
  });

  return (
    <div className={classes.mapContainer}>
      <ReactMapGl
        {...viewPort}
        mapboxApiAccessToken="pk.eyJ1IjoiamVycnlvamoiLCJhIjoiY202dHhmcjBhMDh6azJqc2EwcGozcHV1eSJ9.U_LgDSC9Tf1cQumh1YHPIw"
        width="100%"
        height="100%"
        transitionDuration="200"
        mapStyle="mapbox://styles/jerryojj/cm6u15cyy00dr01se68zp12x2"
      ></ReactMapGl>
    </div>
  );
};

export default Map;
