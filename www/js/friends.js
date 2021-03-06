var friends = {"473251": ["Kishan",40.443739,-79.925207],"257312":["Alex (UC)",40.443399, -79.941915], 
                  "793541":["Brandon (Tepper)",40.445205, -79.945439], "129314":["Aiyana (Schenley Park)",40.438389, -79.946482], 
                  "379285":["Andrew (Oishi)",40.438389, -79.946482], "232164":["Cookie (Noodlehead)",40.438389, -79.946482]}
var init = false;
var map;

var mapOn = false;

function addFriend(){
  var table = document.getElementById("friends");
  var code = prompt("Enter Code:");
  var ind = Object.keys(friends).indexOf(code);
  if (ind > -1){
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    row.className = "friend";
    cell1.innerHTML = friends[code][0];
    cell2.innerHTML = "<input type ='image' onclick = 'on(" + code + ")' src='img/newlocation.png', height='50vh', width='50vh'>"
    cell3.innerHTML = "<img src = 'img/greycircle.png' height='50vh' width='50vh'>"
  }else{
    alert("Bad Code");
  }
  
}

function on(code){
  mapOn = true;
  $(".friend").hide();
  var mp = document.getElementById("map")
  map = plugin.google.maps.Map.getMap(mp);

  if(!init){
    for(var key of Object.keys(friends)){

      var val = friends[key];
              // Add a maker
      map.addMarker({
        position: {lat: val[1], lng: val[2]},
          title: val[0],
          snippet: val[0],
          animation: plugin.google.maps.Animation.BOUNCE
      });
    }
    init = true;
  }
      // Create a Google Maps native view under the map_canvas div.

  code = 
  map.animateCamera({
          target: {lat: friends[code][1], lng: friends[code][2]},
          zoom: 0,
          tilt: 0,
          bearing: 0,
          duration: 5000
        });


  mp.style.display = "block";
}

function off(){
  $(".friend").show();
  document.getElementById("map").style.display = "none"
}

function mapToggle() {
  if(mapOn) {
    off();
    mapOn = false;
  }
}
