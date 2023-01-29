

// Creating the map object
const map= L.map("map").setView([-31.953512, 115.857048],6) ;
  

// Adding the tile layer
const titleUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const attribution= '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tiles=L.tileLayer(titleUrl,{attribution});

tiles.addTo(map);


function generateList(){
    const ul=document.querySelector('.list');
    data.forEach((item) => {
        const li=document.createElement('li');
        const div =document.createElement('div');
        const a=document.createElement('a');
        const p=document.createElement('p');

        div.classList.add('shop_items');
        a.innerText=item.properties.title;
        a.href='#';
        p.innerText=item.properties.price;


        div.appendChild(a);
        div.appendChild(p);
        li.appendChild(div);
        ul.appendChild(li);
        
    


    });
    
}

generateList();

// // let cityMarkers = [];
// let stateMarkers = [];

// // Loop through locations, and create the city and state markers.
// for (let i = 0; i < data.length; i++) {
//   // Setting the marker radius for the state by passing population into the markerSize function
//   stateMarkers.push(
//     L.circle(data[i].coordinates, {
//       stroke: false,
//       fillOpacity: 0.75,
//       color: "red",
//       fillColor: "red",
//     //   radius: markerSize(data.properties.price)
//     })
//   );
// }
// let states = L.layerGroup(stateMarkers);
// layers: [states]



  // Set the marker radius for the city by passing the population to the markerSize() function.
//   cityMarkers.push(
//     L.circle(locations[i].coordinates, {
//       stroke: false,
//       fillOpacity: 0.75,
//       color: "purple",
//       fillColor: "purple",
//       radius: markerSize(locations[i].city.population)
//     })
//   );
// };


// for (let i = 0; i < data.length; i++) {
//     let data = data[i];
//     L.marker(data.properties.price)
// }  


function makepopupContent(shop){
    return `<div> 
    <h4>${shop.properties.title}
    </div>`;
}


function onEachFeature(feature,layer){
    layer.bindPopup(makepopupContent(feature))

}


 const shopsLayer = L.geoJSON(data,{
    onEachFeature: onEachFeature,
    pointToLayer:function(datafeature,latlng){
        return L.marker(latlng)
    }

    
    // onEachFeature: onEachFeature,
    // pointToLayer: function(feature, latlng) {
    //     return L.marker(latlng);   
});
shopsLayer.addTo(map);







// function createMap(shopLayer) {

//     // Create the base layers.
//     let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     })
  
//     let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
//       attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
//     });
  
//     // Create a baseMaps object.
//     let baseMaps = {
//       "Street Map": street,
//       "Topographic Map": topo
//     };
  
//     // Create an overlay object to hold our overlay.
//     let overlayMaps = {
//       shopLayer: shopLayer
//     };
  
//     // Create our map, giving it the streetmap and earthquakes layers to display on load.
//     // let myMap = L.map("map", {
//     //   center: [
//     //     37.09, -95.71
//     //   ],
//     //   zoom: 5,
//     //   layers: [street, earthquakes]
//     // });
  
//     // Create a layer control.
//     // Pass it our baseMaps and overlayMaps.
//     // Add the layer control to the map.
//     L.control.layers(baseMaps, overlayMaps, {
//       collapsed: false
//     }).addTo(myMap);
  
  // }
  


// const marker = L.circle([-32.0210442, 115.9397835],{radius:20000}).addTo(map);

// L.geoJson(statesData).addTo(map);

// let geojson=d3.json("items1.geojson").then((data) => {
//   //  Create the Traces
//   console.log(data.features)
 
//   });


//   d3.json("items1.geojson").then(function (data) {
//     // Define a series of functions for each feature of the visualisation.
//     // Give each feature a popup displaying the place, magnitude, depth and time of the earthquake
//     function onEachFeature(feature, layer) {
//         layer.bindPopup(`<h3>title: ${feature.properties.title}<br>
//         price: ${feature.properties.price}<br>
//         Depth: ${feature.geometry.coordinates[2]}</h3>
//         // <hr><p>${new Date(feature.properties.time)}</p>`);
//     }

//     // Create a circle marker for each earthquake
//     function createCircleMarker(feature, layer) {
//       let options = {
//           radius: MagRad(feature.properties.price),
//           color: 'black',
//           fillColor: DepthColor(feature.geometry.coordinates[2]),
//           weight: 0.5,
//           opacity: 0.8,
//           fillOpacity: 0.6
          
//       }
//       return L.circleMarker(layer, options);
//   }
//   function MagRad(price) {
//     if (price === 0) { // Account for Earthquakes with magnitude of 0 or less
//         return 1;
//     }
//     return price * 14 // Presents an issue when noting Magnitude
// }

// // Colour of circle marker varies with depth - range: [0,1000]
// function DepthColor(depth) {
//     if (depth > 9) {
//         return "#5c5c8a";
//     }
//     if (depth >= 7 && depth <= 9) {
//         return "#aa80ff";
//     }
//     if (depth >= 5 && depth < 7) {
//         return "#cc99ff";
//     }
//     if (depth >= 3 && depth < 5) {
//         return "#ff9999";
//     }
//     if (depth >= 1 && depth < 3) {
//         return "#ffcc99";
//     }
//     else {
//         return "#ffff99";
//     }
// }

// var earthquakes = L.geoJSON(data.features, {
//   onEachFeature: onEachFeature,
//   pointToLayer: createCircleMarker
// });

// var streetmap =  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     });

//     var natgeo = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
//         attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
//         maxZoom: 16
//     });

//     var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
//         maxZoom: 17,
//         attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
//     });


//     // Define baseMaps object to hold base layers
//     var baseMaps = {
//         "Street Map View": streetmap,
//         "Nat Geo View": natgeo,
//         "Topographical View": topo
//     };

//     // Create overlayMaps object to hold overlay layers
//     var overlayMaps = {
//         "Earthquakes": earthquakes,
//     };

//     // Create map object
//     // Centre of map [0, 0]
//     var myMap = L.map("map", { // reference to div id in html
//       center:[-32.83, 115.85],
//       zoom: 4,
//       layers: [streetmap, earthquakes] // Default map
//   });

//   // Create layer control
//   L.control.layers(baseMaps, overlayMaps, {
//       collapsed: false
//   }).addTo(myMap);




//   });

//   // d3.json(items1.geojson).then(function(data) {

//   //   // Create a new choropleth layer.
//   //   geojson = L.choropleth(data, {
  
//   //     // Define which property in the features to use.
//   //     // valueProperty: "",
  
//   //     // Set the colour scale.
//   //     scale: ["#ffffb2", "#b10026"],
  
//   //     // The number of breaks in the step range
//   //     steps: 10,
  
//   //     // q for quartile, e for equidistant, k for k-means
//   //     mode: "q",
//   //     style: {
//   //       // Border colour
//   //       color: "#fff",
//   //       weight: 1,
//   //       fillOpacity: 0.8
//   //     },
//   //     onEachFeature: function(feature, layer) {
//   //       layer.bindPopup("<strong>" + feature.properties.NAME + "</strong><br /><br />Estimated employed population with children age 6-17: " +
//   //         feature.properties.DP03_16E + "<br /><br />Estimated Total Income and Benefits for Families: $" + feature.properties.DP03_75E);
//   //     }
//   //   }).addTo(myMap);
//   // });

// //   let jsonData = ("items1.json");

// //   let outGeoJson = {}
// // outGeoJson['properties'] = jsonData
// // outGeoJson['type']= "Feature"
// // outGeoJson['geometry']= {"type": "Point", "coordinates":
// //     [jsonData['lat'], jsonData['lng']]}

// // console.log(outGeoJson)


// // const roadster = fetch("./items1.json");

// // // Fetch the JSON data and console log it
// // d3.json(roadster).then(function(data) {
// //   console.log(data);
// // });



// // // fetch('./items1.geojson').then(resp => resp.json());
// // let jsonData=fetch("items1.json").then(resp => resp.json());

// // console.log(jsonData);

// // var geojson = {
// //   type: "FeatureCollection",
// //   features: [],
// // };

// // for (i = 0; i < jsonData[1,5]; i++) {
// //   if (window.CP.shouldStopExecution(1)) {
// //     break;
// //   }
// //   geojson.features.push({
// //     "type": "Feature",
// //     "geometry": {
// //       "type": "Point",
// //       "coordinates": [jsonData.i.longitude, jsonData.i.latitude]
// //     },
// //     "properties": {
// //       // "report_at": jsonData.positions[i].report_at,
// //       "lat": jsonData.i.lat,
// //       "lon": jsonData.i.lng,
// //       // "dir": jsonData.positions[i].dir,
// //       // "first": jsonData.positions[i].first,
// //       // "last": jsonData.positions[i].last
// //     }
// //   });
// // }

// // window.CP.exitedLoop(1);

// // console.log(geojson)


// // .getJSON("items1.json", function(jsonData) {
// //   var outGeoJson = {}
// //   outGeoJson['properties'] = jsonData
// //   outGeoJson['type']= "Feature"
// //   outGeoJson['geometry']= {"type": "Point", "coordinates":
// //       [jsonData['lat'], jsonData['lon']]}

// //   console.log(outGeoJson)
// // });

//   // Create a new choropleth layer.

//     // Define which property in the features to use.

//     // Set the color scale.

//     // The number of breaks in the step range

//     // q for quartile, e for equidistant, k for k-means

//     // Binding a popup to each layer

//   // Set up the legend.

//     // Add the minimum and maximum

//   // Adding the legend to the map.


