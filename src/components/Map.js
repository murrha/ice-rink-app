import React, { useRef, useEffect} from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import Form from './Form'; 

mapboxgl.accessToken = "pk.eyJ1IjoibXVycmhhIiwiYSI6ImNsYWxkMmQzZzAzemszcW5ta2NuOWh0c3MifQ.Pe-hp0L3KUE0fmHV-xgRWg";

const Map = () => {

  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-118.289399, 34.251379],
      zoom: 10
    });
    
  });

  
 
  return (
    <div >
      <Form/>
      <div ref={mapContainer} className="map-container" />
      
    </div>
    
    
  )
}

export default Map