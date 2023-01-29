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


$.getJSON("/details", function(details) {
    var totalPrice = 0;
    var lenDetails = 0;
    details.forEach(function(detail) {
        totalPrice += detail.price;
        lenDetails++

        var marker = L.marker([detail.lat, detail.lng]).addTo(markers);
        marker.bindPopup("<b>Name:</b> "+detail.name+"<br><b>Price:</b> "+detail.price+"<br><b>Address:</b> "+detail.address);
    });
    var avgPrice = totalPrice / lenDetails;
    var avgPriceControl = L.control({position: 'bottomright'});
    avgPriceControl.onAdd = function() {
        var div = L.DomUtil.create('div', 'avgPriceControl');
        div.innerHTML = "<b>Average Price:</b> " + avgPrice;
        return div;
    };
    avgPriceControl.addTo(map);

    markers.eachLayer(function(layer) {
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
}, {"Petrol Stations": markers}).addTo(map);
