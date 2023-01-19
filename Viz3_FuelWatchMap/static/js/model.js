// Model: leaflet-challenge

// Store url to fuelwatch.wa.gov.au
var queryUrl = "https://www.fuelwatch.wa.gov.au/fuelwatch/fuelWatchRSS?";

// Need to create a RSS feed reader

// Perform a GET request to the URL
d3.json(queryUrl).then(function (data) {
    // Define a series of functions for each feature of the visualisation.
    // Give each feature a popup displaying the trading-name, price, and address
    function onEachFeature(feature, layer) {
        layer.bindPopup(`<h3>Station Name: ${feature.item.trading-name}<br>
        Price: ${feature.item.price}</h3>
        <hr><p>${feature.item.address}</p>`);
    }


    // Create a circle marker for each station
    function createMarker(feature, layer) {
        let options = {
            radius: MagRad(feature.item.price),
            color: 'black',
            fillColor: DepthColor(feature.geometry.coordinates[2]),
            weight: 0.5,
            opacity: 0.8,
            fillOpacity: 0.75
            
        }
        return L.circleCircle(layer, options);
    }

    // Colour of circle marker varies with depth - range: [0,1000]
    function DepthColor(depth) {
        if (depth > 90) {
            return "#5c5c8a";
        }
        if (depth >= 70 && depth <= 90) {
            return "#aa80ff";
        }
        if (depth >= 50 && depth < 70) {
            return "#cc99ff";
        }
        if (depth >= 30 && depth < 50) {
            return "#ff9999";
        }
        if (depth >= 10 && depth < 30) {
            return "#ffcc99";
        }
        else {
            return "#ffff99";
        }
    }

    // Create a GeoJSON layer containing the feature array on the earthquake data object.
    // Run the onEachFeature function once for each piece of data in the array
    var earthquakes = L.geoJSON(data.features, {
        onEachFeature: onEachFeature,
        pointToLayer: createCircleMarker
    });

    // Create base layers
    var streetmap =  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });


    var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        maxZoom: 17,
        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    });


    // Define baseMaps object to hold base layers
    var baseMaps = {
        "Street Map View": streetmap,
        "Topographical View": topo
    };

    // Create overlayMaps object to hold overlay layers
    var overLayMaps = {
        "Earthquakes": earthquakes,
    };
    
    // Create map object
    // Center: Perth, WA
    // Future build - Request suburb from user. Maybe with a dropdown?
    var myMap = L.map("map", { // reference to div id in html
        center: [31.9523, 115.8613],
        zoom: 3,
        layers: [streetmap] // Default map
    });

    // Create layer control
    L.control.layers(baseMaps, overLayMaps, {
        collapsed: false
    }).addTo(myMap);

    
    // Create Legend - Refer to L15.2 Activity 04
   var legend = L.control({position: "bottomright"});

    legend.onAdd = function () {
        let div = L.DomUtil.create("div", "info legend");
        let limits = ['-10-10', '10-30', '30-50', '50-70', '70-90', '90+'];
        let colors = ['#ffff99', '#ffcc99', '#ff9999', '#cc99ff', '#aa80ff', '#5c5c8a'];
        
        // Forrmat legend
        let legendInfo = "<h4>Depth (KM)</h4>";
        div.innerHTML = legendInfo

        // Loop through depth limits and generate a label with a coloured square to represent each grade.
        for (let i = 0; i < limits.length; i++) {
            div.innerHTML += `<div><i style="background: ${colors[i]}"></i> ${limits[i]}</div>`;
        }

        return div;
    };
    // Add the legend to the map 
    legend.addTo(myMap);

});

