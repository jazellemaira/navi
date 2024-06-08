const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoibnN1bmFtaSIsImEiOiJjbHM5Y2dsNHkwMmlsMm5vNm16eDZmbGJlIn0.nh_8PWUFOjNvCcKrMQETcA"

const map = new mapboxgl.Map({
  accessToken: MAPBOX_ACCESS_TOKEN,
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12", // style URL
  center: [-74.5, 40], // starting position [lng, lat]
  zoom: 9, // starting zoom
})
