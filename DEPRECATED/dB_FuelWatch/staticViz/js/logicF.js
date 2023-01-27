// Create base layers

var streetmap =  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

var natgeo = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
  maxZoom: 16
});


// Define baseMaps object to hold base layers
var baseMaps = {
  "Street Map View": streetmap,
  "Nat Geo View": natgeo,
};

// Create map object
var myMap = L.map("map", {
  center: [-31.9523, 115.8613]
  zoom: 4,
  layers: [streetmap]
});


L.control.layers(baseMaps {
  collapsed: false
}).addTo(myMap);

// Test array

let places = [{
  location: [-31.9568, 115.8694],
  name: "Perth Mint"
},
{
  location: [-31.9290, 115.7549],
  name: "Floreat Beach"
},
{
  location: [-31.9789, 115.8181],
  name: "UWA"
}
];

// Simple markers
for (let i = 0; i < places.length; i++) {
  let place = places[i];
  L.marker(place.location)
    .bindPopup(`<h1>${place.name}</h1>`)
    .addTo(myMap);
}
