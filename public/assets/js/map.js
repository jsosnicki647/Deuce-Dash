$(document).ready(() => {
    console.log("SHITBALLS")

    var database = firebase.database()

    database.ref().on("child_added", function (childSnapshot) {
        const lat = childSnapshot.val().lat
        const lng = childSnapshot.val().lng
        const address = childSnapshot.val().address
        addMarker(lat, lng)
    })


    const mymap = L.map('mapid').setView([40.783, -73.971], 13)
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoianNvc25pY2tpNjQ3IiwiYSI6ImNqeXZwNWtvajAwdWczbmxwbWV2dGsyZ2wifQ.2nfmSiYk4DlYv3AhXycbUA'
    }).addTo(mymap)

    const addMarker = (lat, lng) => {
        const marker = L.marker([lat, lng]).addTo(mymap)
        console.log(marker)
    }


})