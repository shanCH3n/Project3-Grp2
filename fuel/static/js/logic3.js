$.getJSON("/details", function(details) {
    var map = L.map('map').setView([-31.9523, 115.8613], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    details.forEach(function(detail) {
        L.marker([detail.lat, detail.lng]).addTo(map);
    });
});