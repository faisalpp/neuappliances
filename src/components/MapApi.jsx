import React,{useEffect} from 'react'
import { Loader } from "@googlemaps/js-api-loader"
import {cords} from '../components/cords';

const MapApi = () => {

  const loadMap = async () => {
    const loader = new Loader({
      apiKey: 'AIzaSyBJa7rXLIRQKJPLS6awxh2gG529tDmccMs', // Replace with your own API key
      version: 'weekly', // or specify a specific version (e.g., 'weekly', 'weekly.next', 'beta')
    });
  
    await loader.load();

    // Mid of cords
    var dataArray = cords[78602];
    var midIndex = Math.floor(dataArray.length / 2);
    var midObject = dataArray[midIndex];
    
    var midLat = midObject.lat;
    var midLng = midObject.lng;

    function geocodeAddress(geocoder, map,key) {
      var address = key; // Replace with your searched location
    
      geocoder.geocode({ address: address }, function (results, status) {
        if (status === "OK") {
          map.setCenter(results[0].geometry.location);
          var marker = new window.google.maps.Marker({
            map: map,
            position: results[0].geometry.location,
          });
        } else {
          alert("Geocode was not successful for the following reason: " + status);
        }
      });
    }

    // Initialize the map
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: midLat, lng: midLng},
      zoom: 10,
      disableDefaultUI: true
    });
  
    // Define the polygon coordinates
    const polygonCoordinates = cords[78602];
  
    // Create the polygon
    const polygon = new window.google.maps.Polygon({
      paths: polygonCoordinates,
      strokeColor: '#4e41da',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#4e41da80',
      fillOpacity: 0.35,
    });
    var geocoder = new window.google.maps.Geocoder();
    const keys = Object.keys(cords);
    const key = keys[0];
    geocodeAddress(geocoder, map,key);
    // Set the polygon on the map
    polygon.setMap(map);
  };
      
    useEffect(() => {
     loadMap();              
    }, [])
      
    
  return (
    <div id="map" className='w-11/12 h-[490px] rounded-2xl' ></div>
  )
}

export default MapApi