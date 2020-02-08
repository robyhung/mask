function geoFindMe() {
  var output = document.getElementById("out");
 // var temps = document.getElementById("have");
 // var index = temps.selectedIndex;

  // console.log(temps[index].value);
  //var num = temps[index].value;

  if (!navigator.geolocation) {
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    // output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

    /*var img = new Image();
    img.src = "http://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";
 
    output.appendChild(img);*/
    var map = L.map('map', {
      center: [latitude, longitude],
      zoom: 14
    });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    var OrangeIcon = new L.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
    L.marker([latitude, longitude], { icon: OrangeIcon }).addTo(map)
      .bindPopup('<h1>我目前位置</h1></p>')
      .openPopup();



    var redIcon = new L.Icon({
      iconUrl: './images/marker-icon-red.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
    var greenIcon = new L.Icon({
      iconUrl: './images/marker-icon-green.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    var goldIcon = new L.Icon({
      iconUrl: './images/marker-icon-gold.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
    var xhr = new XMLHttpRequest();
    xhr.open("get", "https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json");
    xhr.send();
    var markers = new L.MarkerClusterGroup().addTo(map);
    xhr.onload = function () {
      var data = JSON.parse(xhr.responseText).features;




      for (let i = 0; data.length > i; i++) {
      //  if ((num == 1) && (data[i].properties.mask_adult > 0)) {
          if (data[i].properties.mask_adult == 0) {
            mask = redIcon;
          } else if ((data[i].properties.mask_adult <= 50) && (data[i].properties.mask_adult >= 1)) {
            mask = goldIcon;
          }
          else {
            mask = greenIcon;
          }

       // }

      //  if ((num == 1) && (data[i].properties.mask_adult > 0)) {
          markers.addLayer(L.marker([data[i].geometry.coordinates[1],
          data[i].geometry.coordinates[0]], { icon: mask })
            .bindPopup('<h1>' + data[i].properties.name + '</h1>' +
              '<p>成人口罩數量：' + data[i].properties.mask_adult + '</p>' +
              '<p>兒童口罩數量：' + data[i].properties.mask_child + '</p>' +
              '<p>地址：' + data[i].properties.address + '</p>' +
              '<p>更新時間：' + data[i].properties.updated + '</p>'
            ));
       /// }



        //放入marker使用者本身的地點

      };//迴圈結束
    };//xhr結束
    map.addLayer(markers);
  };//functon結束


  function error() {
    output.innerHTML = "Unable to retrieve your location";
  };



  navigator.geolocation.getCurrentPosition(success, error);
}
geoFindMe();