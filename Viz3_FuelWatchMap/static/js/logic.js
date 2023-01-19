function createMap(bikeStations) {

  // Create the tile layer that will be the background of our map.
  let streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });


  // Create a baseMaps object to hold the streetmap layer.
  let baseMaps = {
    "Street Map": streetmap
  };

  // Create an overlayMaps object to hold the bikeStations layer.
  let overlayMaps = {
    "Petrol Stations": PetStations
  };

  // Create the map object with options.
  // Center: Perth, WA
  let map = L.map("map", {
    center: [31.9523, 115.8613],
    zoom: 12,
    layers: [streetmap, PetStations]
  });

  // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(map);
}

function createMarkers(response) {

  // Pull the "item" property from response.data.
  let items = response.channel.item;

  // Initialize an array to hold bike markers.
  let StationMarkers = [];

  // Loop through the stations array.
  for (let index = 0; index < items.length; index++) {
    let item = items[index];

    // For each station, create a marker, and bind a popup with the station's name.
    let StationMarker = L.marker([item.latitude, item.longitude])
      .bindPopup("<h3>Station Name:" + item.trading-name 
      + "<h3><h3>Address: " + item.price + "<h3><h3>Address: " + item.price + "</h3>" );

    // Add the marker to the bikeMarkers array.
    StationMarkers.push(StationMarker);
  }

  // Create a layer group that's made from the station markers array, and pass it to the createMap function.
  createMap(L.layerGroup(StationMarkers));
}


// Perform an API call to the Citi Bike API to get the station information. Call createMarkers when it completes.
d3.json("https://gbfs.citibikenyc.com/gbfs/en/station_information.json").then(createMarkers);
