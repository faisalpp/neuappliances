import React,{useEffect} from 'react'
import { Loader } from "@googlemaps/js-api-loader"

const MapApi = () => {

    const polygonOptions = {
        fillColor: '#0000FF', // Set the fill color to blue
        fillOpacity: 0.35,
        strokeWeight: 2,
        clickable: false,
        editable: false,
        zIndex: 1
      };
    
      const paths = [
         { lat: 37.123, lng: -122.456 },
      ];
      
      useEffect(() => {
        const loader = new Loader({
            apiKey: "AIzaSyBJa7rXLIRQKJPLS6awxh2gG529tDmccMs",
            version: "weekly",
          });
          
          loader.load().then(async () => {
            const { Map } = await window.google.maps.importLibrary("maps");
          
           const map = new Map(document.getElementById("map"), {
              center: { lat: 30.2220572, lng: -97.7503083, },
              zoom: 8,
              disableDefaultUI: true,
            });

          });          
      }, [])
      
    
  return (
    <div id="map" className='w-96 h-96' ></div>
  )
}

export default MapApi