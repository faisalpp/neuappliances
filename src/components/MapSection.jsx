import React, { useState,useEffect } from 'react'
import { AiFillCheckCircle,AiFillCloseCircle } from 'react-icons/ai'
import { Loader } from "@googlemaps/js-api-loader"
import {AiOutlineSearch,AiOutlineCheckCircle} from 'react-icons/ai'
import {BsArrowRightShort} from 'react-icons/bs'
import {cords} from './cords'

const MapSection = () => {

  const [zip,setZip] = useState(78602);
  const [success,setSuccess] = useState(false);
  const [error,setError] = useState(false);

  function geocodeAddress(geocoder, map,key) {
    var address = key; // Replace with your searched location
  
    geocoder.geocode({ address: address }, function (results, status) {
      if (status === "OK") {
        map.setCenter(results[0].geometry.location);
        var marker = new window.google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
        });
      }
    });
  }

  const loadMap = async (result) => {
    const loader = new Loader({
      apiKey: 'AIzaSyBJa7rXLIRQKJPLS6awxh2gG529tDmccMs', // Replace with your own API key
      version: 'weekly', // or specify a specific version (e.g., 'weekly', 'weekly.next', 'beta')
    });
  
    await loader.load();
    
    // Mid of cords
    var dataArray = result;
    var midIndex = Math.floor(dataArray.length / 2);
    var midObject = dataArray[midIndex];
    
    var midLat = midObject.lat;
    var midLng = midObject.lng;

    // Initialize the map
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: midLat, lng: midLng},
      zoom: 10,
      disableDefaultUI: true
    });
  
    // Define the polygon coordinates
    const polygonCoordinates = [result];
  
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
    const keys = Object.keys(zip);
    const key = keys[0];
    geocodeAddress(geocoder, map,key);
    // Set the polygon on the map
    polygon.setMap(map);
  };

  const loadMap2 = async (result) => {
    const loader = new Loader({
      apiKey: 'AIzaSyBJa7rXLIRQKJPLS6awxh2gG529tDmccMs', // Replace with your own API key
      version: 'weekly', // or specify a specific version (e.g., 'weekly', 'weekly.next', 'beta')
    });
  
    await loader.load();
    
    // Mid of cords
    var dataArray = result[78602];
    var midIndex = Math.floor(dataArray.length / 2);
    var midObject = dataArray[midIndex];
    
    var midLat = midObject.lat;
    var midLng = midObject.lng;

    // Initialize the map
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: midLat, lng: midLng},
      zoom: 10,
      disableDefaultUI: true
    });
  
    // Define the polygon coordinates
    const polygonCoordinates = [result['78602']];
  
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
    const keys = Object.keys(result);
    const key = keys[0];
    geocodeAddress(geocoder, map,key);
    // Set the polygon on the map
    polygon.setMap(map);
  };
      
  const Submit = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
      try {
        const response = await fetch(`http://localhost:3030/${zip}`,requestOptions);
        if (response.status === 200) {
          const data = await response.json();
          loadMap(data); // Call the loadMap function with the received data
          setSuccess(true);
          setError(false);
        } else {
          loadMap2(cords);
          setSuccess(false);
          setError(true);
          // Handle error or display a message
        }
      } catch (error) {
        console.log('Error fetching API:', error);
        // Handle error or display a message
      }
  };

  useEffect(() => {
    Submit();
  }, [])

  return (
    <>
          <h4 className='font-bold text-center text-2xl mt-10' >Neu Local Delivery Area</h4>
          <div className='relative flex flex-col justify-center items-center py-10 w-full h-full' >
           <div className={`absolute ${success ? 'flex' : 'hidden'} items-center z-20 top-32 space-x-2 bg-white shadow-xl px-5 py-2 rounded-lg`} >
            <AiFillCheckCircle className='text-b12' />
            <p className='font-semibold' >Delivery Available {zip}</p>
           </div>
           <div className={`absolute bottom-10 ${error? 'flex' : 'hidden'} items-center z-20 bg-transparent h-52 justify-center w-11/12`} >
            <div className='flex justify-center h-fit items-center space-x-2 bg-white shadow-xl px-5 py-2 rounded-lg' >
               <AiFillCloseCircle className='text-red-500' />
               <p className='font-semibold' >Delivery Not Available {zip}</p>
            </div>
           </div> 

            {/* Map Form Start Here */}
            <div className='absolute left-20 lg:flex hidden h-fit py-10 w-[380px] rounded-2xl bg-white shadow-2xl z-30 ' >
      <div className='flex flex-col  justify-center px-10 space-y-5' >
       <h4 className='font-bold text-xl' >Delivery & Installation</h4>
       <p className='text-sm' >We make getting your appliance delivered and installed easy! We offer delivery and installation services to the greater Austin and surrounding areas! Input your Zipcode to see if we offer delivery and installation services in your area! </p>
       <div className='flex flex-col space-y-1 bg-b7 px-4 py-4 rounded-lg' >
        <h4 className='text-white text-sm' >Check Your Zip Code</h4>
        <div className='flex items-center bg-white rounded-sm py-1 px-2 space-x-2'><AiOutlineSearch className='text-gray-400' /><input className='text-xs outline-none' value={zip} onChange={e => setZip(e.target.value)} placeholder='Enter ZIP Code' /></div>
       </div>
        <div className='flex justify-center' ><a onClick={Submit} className='flex items-center cursor-pointer bg-b3 w-full justify-center px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Get Our Best Deals</span><BsArrowRightShort className='text-2xl' /></a></div>
        <div className={` ${success ?'flex':'hidden'} justify-center`} ><a className='flex items-center cursor-pointer bg-b12 w-full px-4 py-2 justify-center space-x-2 rounded-2xl text-white font-semibold' ><AiOutlineCheckCircle className='text-sm' /><span className='text-xs' >Delivery Available</span></a></div>
        <div className={` ${error ? 'flex':'hidden'} justify-center`} ><a className='flex items-center cursor-pointer bg-red-500 w-max px-4 py-2 justify-center space-x-2 rounded-2xl text-white font-semibold' ><AiOutlineCheckCircle className='text-sm' /><span className='text-xs' >Delivery Not Available - Pickup Only</span></a></div>
      </div>
	</div>      
            {/* Map Form Start Here */}
            
             {/* Map Section Start */}
             <div id="map" className='w-11/12 h-[490px] rounded-2xl' ></div>
             {/* Map Section End */}
          
            {/* <div className='bg-red-500 w-11/12 h-[490px] rounded-2xl' ></div> */}
          </div>
    </>
  )
}

export default MapSection