mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map", // container ID
  center: listing.geometry.coordinates, // starting position [lng, lat]
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v11",
});

const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates)
  .addTo(map)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h4>${listing.location}</h4> <p>Exact Location Provided After Booking</p>`
    )
  );
