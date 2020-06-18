var mymap = L.map('mapid').setView([51.10, 71.26], 13);

// const attribution = '';


// const tileUrl = '';
// const tiles = '';
// const api_url = '';


// L.tileLayer('https://api.mapbox.com/v4/mapbox.satellite/1/0/0@2x.jpg90?access_token=pk.eyJ1IjoiYmxhY2tvcmNoaWQiLCJhIjoiY2tiajFxZGhwMDRpbDJ5bGM0Y3U4NDE3cyJ9.M5mjHEdrpzmbf4KDDlFZfg');
// mapbox://styles/blackorchid/ckbj2ikvm1rf71jpqgrqef4xv/draft
// mapbox://styles/blackorchid/ckbj2ikvm1rf71jpqgrqef4xv
// pk.eyJ1IjoiYmxhY2tvcmNoaWQiLCJhIjoiY2tiajFxZGhwMDRpbDJ5bGM0Y3U4NDE3cyJ9.M5mjHEdrpzmbf4KDDlFZfg
// const x = 
// const y = 
// const z = 13;

L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/1/1/0?access_token=pk.eyJ1IjoiYmxhY2tvcmNoaWQiLCJhIjoiY2tiajFxZGhwMDRpbDJ5bGM0Y3U4NDE3cyJ9.M5mjHEdrpzmbf4KDDlFZfg', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 256,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYmxhY2tvcmNoaWQiLCJhIjoiY2tiajFxZGhwMDRpbDJ5bGM0Y3U4NDE3cyJ9.M5mjHEdrpzmbf4KDDlFZfg'
}).addTo(mymap);

