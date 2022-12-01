import { Component, createEffect } from 'solid-js';
import L from 'leaflet';

const Map: Component = () => {
  let mapRef;

  createEffect(() => {
    var map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
  })

  console.log("MAP REF", mapRef)

  return (
    <div id="map" ref={mapRef}></div>
  )
};

export default Map;