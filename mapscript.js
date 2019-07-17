

      // Note: This example requires that you consent to location sharing when
      // prompted by your browser. If you see the error "The Geolocation service
      // failed.", it means you probably did not give permission for the browser to
      // locate you.
      var map, infoWindow;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 48.1981, lng: 16.3948},
          zoom: 18
        });
        infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('You are here.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }

///////////////////////////////////////////display xml file/////////////////////////////////////////////////////////////////
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
