maptilersdk.config.apiKey = 'bk3cQh8hEn5B03jOJki0';
const myMap = new maptilersdk.Map({
    container: 'map', // container's id or the HTML element to render the map
    style:  maptilersdk.MapStyle.SATELLITE,
    center: [77.209, 28.6139], // starting position [lng, lat]
    zoom: 0.75, // starting zoom
});


