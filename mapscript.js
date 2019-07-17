var customLabel = {
  restaurant: {
    label: 'R'
  },
  bar: {
    label: 'B'
  },
  School: {
    label: 'S'
  }
};

  function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(48.189617, 16.332928),
    zoom: 12
  });
  var infoWindow = new google.maps.InfoWindow;

    // Change this depending on the name of your PHP or XML file
    downloadUrl('https://storage.googleapis.com/mapsdevsite/json/mapmarkers2.xml', function(data) {
      var xml = data.responseXML;
      var markers = xml.documentElement.getElementsByTagName('marker');
      Array.prototype.forEach.call(markers, function(markerElem) {
        var id = markerElem.getAttribute('id');
        var name = markerElem.getAttribute('name');
        var address = markerElem.getAttribute('address');
        var type = markerElem.getAttribute('type');
        var point = new google.maps.LatLng(
            parseFloat(markerElem.getAttribute('lat')),
            parseFloat(markerElem.getAttribute('lng')));

        var infowincontent = document.createElement('div');
        var strong = document.createElement('strong');
        strong.textContent = name
        infowincontent.appendChild(strong);
        infowincontent.appendChild(document.createElement('br'));

        var text = document.createElement('text');
        text.textContent = address
        infowincontent.appendChild(text);
        var icon = customLabel[type] || {};
        var marker = new google.maps.Marker({
          map: map,
          position: point,
          label: icon.label
        });
        marker.addListener('click', function() {
          infoWindow.setContent(infowincontent);
          infoWindow.open(map, marker);
        });
      });
    });
  }



function downloadUrl(url, callback) {
  var request = window.ActiveXObject ?
      new ActiveXObject('Microsoft.XMLHTTP') :
      new XMLHttpRequest;

  request.onreadystatechange = function() {
    if (request.readyState == 4) {
      request.onreadystatechange = doNothing;
      callback(request, request.status);
    }
  };

  request.open('GET', url, true);
  request.send(null);
}

function doNothing() {}


///////////////////////////////////////////display xml file////////////////////////////////////////////////////////
              function loadDoc() {
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        myFunction(this);
                    }
                };
                xhttp.open("GET", "maps.php", true);
                xhttp.send();
              }

            var i;
            var table = "<thead><tr><th>Type</th><th>Name</th><th>Address</th><th>Latitude</th><th>Longitude</th></tr></thead>";
            var x = document.getElementsByTagName("marker");
            for (i = 0; i < x.length; i++) {
                table += "<tbody><tr><td>" +
                    x[i].getAttribute("type")+
                    "</td><td>" +
                    x[i].getAttribute("name")+
                    "</td><td>" +
                    x[i].getAttribute("address")+
                    "</td><td>" +
                    x[i].getAttribute("lat")+
                    "</td><td>" +
                    x[i].getAttribute("lng")+
                    "</td><tr></tbody>";
            }

                document.getElementById("display").innerHTML = table;
