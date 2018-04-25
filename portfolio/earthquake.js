var map
var infowindow

function showQuakes(data) {
  var quakesArray = data.features

  // how will you create the markers to display the quakes?
 
  for (var i = 0; i < quakesArray.length; i++){
      createMarker(data.features[i].geometry.coordinates[1], data.features[i].geometry.coordinates[0], data.features[i].properties.mag, data.features[i].properties.title)
  }
}
function createMarker(lat, lon, mag, content) {
  var latLng = new google.maps.LatLng(lat, lon)
  var marker = new google.maps.Marker({
          position: latLng,
          label: {text: mag.toString(), // this puts a label on the marker icon
                  fontSize: "10px"},
          map: map
        })

        google.maps.event.addListener(marker, 'click', function(){
          infowindow.setContent("<div class='content'>" + content + "</div>");
          infowindow.open(map,marker);
        })
}

function makeRequest() {
  $.ajax({
    url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson",
    success: function(data) {
      showQuakes(data)
    }
  })
}

function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
center: {lat: 34.1541017, lng: -118.1273957}, 
    zoom: 2
  })

  infowindow = new google.maps.InfoWindow({
    content: "placeholder"
  })

  makeRequest()
    
}
