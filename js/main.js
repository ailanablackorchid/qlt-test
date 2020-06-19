// Map setup using Leaflet and Mapbox

var mymap = L.map('mapid').setView([51.111, 71.436], 14);

//     accessToken: 'pk.eyJ1IjoiYmxhY2tvcmNoaWQiLCJhIjoiY2tiajFxZGhwMDRpbDJ5bGM0Y3U4NDE3cyJ9.M5mjHEdrpzmbf4KDDlFZfg'

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYmxhY2tvcmNoaWQiLCJhIjoiY2tiajFxZGhwMDRpbDJ5bGM0Y3U4NDE3cyJ9.M5mjHEdrpzmbf4KDDlFZfg'
}).addTo(mymap);


// Markers on the map
var marker = L.marker([51.111, 71.436]).addTo(mymap);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

var marker1 = L.marker([51.111, 71.438]).addTo(mymap);
