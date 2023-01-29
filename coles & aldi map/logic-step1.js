

// Creating the map object
const map= L.map("map").setView([-31.953512, 115.857048],11) ;
  

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
        const r=document.createElement('p');
        
        a.addEventListener('Click',() =>{
          flytostore(shop);
        })

        div.classList.add('shop_items');
        a.innerText=item.properties.title;
        a.href='#';
        p.innerText=item.properties.price;
        r.innerText=item.properties.Store;
        


        div.appendChild(a);
        div.appendChild(p);
        div.appendChild(r);

        li.appendChild(div);
        ul.appendChild(li);
        
    


    });
    
}

generateList();




function makepopupContent(shop){
    return `<div> 
    <h4>${shop.properties.title}</h4>
    <p>${shop.properties.price}</p>
    <r>${shop.properties.Store}</r>
    </div>`;
}


function onEachFeature(feature,layer){
    layer.bindPopup(makePopupContent(feature));

}


const markers = new L.LayerGroup();

for (let i = 0; i < data.length; i++) {
    const feature = data[i];
    const latlng = [feature.geometry.coordinates[1], feature.geometry.coordinates[0]];
    const marker = L.marker(latlng);
    marker.bindPopup(makepopupContent(feature));
    markers.addLayer(marker);
}


markers.addTo(map);

function flytostore(Store){
  map.flyTo(Store.geometry.coordinates[1],store.geometry.coordinates[0])
  
}