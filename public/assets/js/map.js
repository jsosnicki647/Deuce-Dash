$(document).ready(() => {
    const mymap = L.map('mapid').setView([40.783, -73.971], 13)
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoianNvc25pY2tpNjQ3IiwiYSI6ImNqeXZwNWtvajAwdWczbmxwbWV2dGsyZ2wifQ.2nfmSiYk4DlYv3AhXycbUA'
    }).addTo(mymap)

    var marker = L.marker([40.783, -73.971]).addTo(mymap)
})