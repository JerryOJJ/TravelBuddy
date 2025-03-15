import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import useStyles from './style'

const Mapbox = () => {
  const mapContainerRef = useRef();
  const mapRef = useRef();
  const classes = useStyles();

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiamVycnlvamoiLCJhIjoiY202dHhmcjBhMDh6azJqc2EwcGozcHV1eSJ9.U_LgDSC9Tf1cQumh1YHPIw';

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: [-74.5, 40], 
      zoom: 9
    });
  });

  return (
    <div
      className={classes.mapContainer}
      ref={mapContainerRef}
    />
  );
};

export default Mapbox;