var streets = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

var dark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
});

var map = L.map('map', {
    center: [-31.9523, 115.8613],
    zoom: 13,
    layers: [streets]
});

var markers = L.layerGroup().addTo(map)
var highPriceMarkers = L.layerGroup();


$.getJSON("/details", function(details) {
    var totalPrice = 0;
    
    details.forEach(function(detail) {
        totalPrice += parseInt(detail.price);
    });

    var avgPrice = (totalPrice / details.length).toFixed(2);

    details.forEach(function(detail) {
        if (detail.price > avgPrice) {
            var marker = L.circleMarker([detail.lat, detail.lng], {
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0.5,
                radius: 8
            }).addTo(highPriceMarkers);
            marker.bindPopup("<b>Name:</b> "+detail.name+"<br><b>Price: $</b> "+detail.price+"<br><b>Address:</b> "+detail.address + "<br><b>Avg Price: $</b>" + avgPrice);
        } else {
            var marker = L.marker([detail.lat, detail.lng]).addTo(markers);
            marker.bindPopup("<b>Name:</b> "+detail.name+"<br><b>Price: $</b> "+detail.price+"<br><b>Address:</b> "+detail.address + "<br><b>Avg Price: $</b>" + avgPrice);
        }

    });

    markers.eachLayer(function(layer) {
        layer.on('mouseover', function(e) {
            this.openPopup();
        });
        layer.on('mouseout', function(e) {
            this.closePopup();
        });
    });

    highPriceMarkers.eachLayer(function(layer) {
        layer.on('mouseover', function(e) {
            this.openPopup();
        });
        layer.on('mouseout', function(e) {
            this.closePopup();
        });
    });
});

var layerControl = L.control.layers({
    "Day View": streets,
    "Night View": dark
}, {"Reasonably Priced Petrol": markers, "Highly Priced Petrol": highPriceMarkers}).addTo(map);