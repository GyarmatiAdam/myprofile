var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 48.1981, lng: 16.3948},
    zoom: 16
  });
}