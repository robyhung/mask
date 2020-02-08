/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/all.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/all.js":
/*!*******************!*\
  !*** ./js/all.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function geoFindMe() {\r\n  var output = document.getElementById(\"out\");\r\n // var temps = document.getElementById(\"have\");\r\n // var index = temps.selectedIndex;\r\n\r\n  // console.log(temps[index].value);\r\n  //var num = temps[index].value;\r\n\r\n  if (!navigator.geolocation) {\r\n    output.innerHTML = \"<p>Geolocation is not supported by your browser</p>\";\r\n    return;\r\n  }\r\n\r\n  function success(position) {\r\n    var latitude = position.coords.latitude;\r\n    var longitude = position.coords.longitude;\r\n\r\n    // output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';\r\n\r\n    /*var img = new Image();\r\n    img.src = \"http://maps.googleapis.com/maps/api/staticmap?center=\" + latitude + \",\" + longitude + \"&zoom=13&size=300x300&sensor=false\";\r\n \r\n    output.appendChild(img);*/\r\n    var map = L.map('map', {\r\n      center: [latitude, longitude],\r\n      zoom: 14\r\n    });\r\n    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {\r\n      attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors'\r\n    }).addTo(map);\r\n    var OrangeIcon = new L.Icon({\r\n      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png',\r\n      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',\r\n      iconSize: [25, 41],\r\n      iconAnchor: [12, 41],\r\n      popupAnchor: [1, -34],\r\n      shadowSize: [41, 41]\r\n    });\r\n    L.marker([latitude, longitude], { icon: OrangeIcon }).addTo(map)\r\n      .bindPopup('<h1>我目前位置</h1></p>')\r\n      .openPopup();\r\n\r\n\r\n\r\n    var redIcon = new L.Icon({\r\n      iconUrl: './images/marker-icon-red.png',\r\n      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',\r\n      iconSize: [25, 41],\r\n      iconAnchor: [12, 41],\r\n      popupAnchor: [1, -34],\r\n      shadowSize: [41, 41]\r\n    });\r\n    var greenIcon = new L.Icon({\r\n      iconUrl: './images/marker-icon-green.png',\r\n      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',\r\n      iconSize: [25, 41],\r\n      iconAnchor: [12, 41],\r\n      popupAnchor: [1, -34],\r\n      shadowSize: [41, 41]\r\n    });\r\n\r\n    var goldIcon = new L.Icon({\r\n      iconUrl: './images/marker-icon-gold.png',\r\n      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',\r\n      iconSize: [25, 41],\r\n      iconAnchor: [12, 41],\r\n      popupAnchor: [1, -34],\r\n      shadowSize: [41, 41]\r\n    });\r\n    var xhr = new XMLHttpRequest();\r\n    xhr.open(\"get\", \"https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json\");\r\n    xhr.send();\r\n    var markers = new L.MarkerClusterGroup().addTo(map);\r\n    xhr.onload = function () {\r\n      var data = JSON.parse(xhr.responseText).features;\r\n\r\n\r\n\r\n\r\n      for (let i = 0; data.length > i; i++) {\r\n      //  if ((num == 1) && (data[i].properties.mask_adult > 0)) {\r\n          if (data[i].properties.mask_adult == 0) {\r\n            mask = redIcon;\r\n          } else if ((data[i].properties.mask_adult <= 50) && (data[i].properties.mask_adult >= 1)) {\r\n            mask = goldIcon;\r\n          }\r\n          else {\r\n            mask = greenIcon;\r\n          }\r\n\r\n       // }\r\n\r\n      //  if ((num == 1) && (data[i].properties.mask_adult > 0)) {\r\n          markers.addLayer(L.marker([data[i].geometry.coordinates[1],\r\n          data[i].geometry.coordinates[0]], { icon: mask })\r\n            .bindPopup('<h1>' + data[i].properties.name + '</h1>' +\r\n              '<p>成人口罩數量：' + data[i].properties.mask_adult + '</p>' +\r\n              '<p>兒童口罩數量：' + data[i].properties.mask_child + '</p>' +\r\n              '<p>地址：' + data[i].properties.address + '</p>' +\r\n              '<p>更新時間：' + data[i].properties.updated + '</p>'\r\n            ));\r\n       /// }\r\n\r\n\r\n\r\n        //放入marker使用者本身的地點\r\n\r\n      };//迴圈結束\r\n    };//xhr結束\r\n    map.addLayer(markers);\r\n  };//functon結束\r\n\r\n\r\n  function error() {\r\n    output.innerHTML = \"Unable to retrieve your location\";\r\n  };\r\n\r\n\r\n\r\n  navigator.geolocation.getCurrentPosition(success, error);\r\n}\r\ngeoFindMe();\n\n//# sourceURL=webpack:///./js/all.js?");

/***/ })

/******/ });