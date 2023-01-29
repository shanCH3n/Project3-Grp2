$.getJSON("/details", function(details) {
    var map = L.map('map').setView([-31.9523, 115.8613], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    details.forEach(function(detail) {
        var marker = L.marker([detail.lat, detail.lng]).addTo(map);
        marker.bindPopup("<b>Name:</b> "+detail.name+"<br><b>Price:</b> "+detail.price+"<br><b>Address:</b> "+detail.address);
        marker.on('mouseover', function(e) {
            this.openPopup();
        });
        marker.on('mouseout', function(e) {
            this.closePopup();
        });
    });
});