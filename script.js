const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoibnN1bmFtaSIsImEiOiJjbHM5Y2dsNHkwMmlsMm5vNm16eDZmbGJlIn0.nh_8PWUFOjNvCcKrMQETcA"

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
})

function setupMap(centerPosition) {
  const map = new mapboxgl.Map({
    accessToken: MAPBOX_ACCESS_TOKEN,
    container: "map",
    style: "mapbox://styles/mapbox/navigation-night-v1",
    // style: "mapbox://styles/mapbox/standard",
    center: centerPosition,
    zoom: 15,
  })

  const navigationControls = new mapboxgl.NavigationControl()
  map.addControl(navigationControls, "top-right")

  const directionControls = new MapboxDirections({
    accessToken: MAPBOX_ACCESS_TOKEN,
  })
  map.addControl(directionControls, "top-left")
}

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
  console.log(position)
}

function errorLocation() {
  setupMap([5.31, 51.68])
}
