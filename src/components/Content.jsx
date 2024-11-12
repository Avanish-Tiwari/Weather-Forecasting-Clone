import React, { useContext, useEffect, useState } from 'react'
import TodayWeather from './TodayWeather'
import Advertise from './Advertise'
import { PinCodeContext } from './PinCodeContext';

export default function Content () {
    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [error, setError] = useState(null);
    const [details,setDetails]=useState({})

    const { pinCode, setPinCode } = useContext(PinCodeContext);
    // useEffect(()=>console.log(pinCode),[pinCode])
    /// fetching location latitude and longitude
    const [test,setTest]=useState(false);
    useEffect(()=>{
        if(pinCode.length===6){
          setTest(pinCode)
        }
    },[pinCode])
    useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (error) => {
            setError(error.message);
          }
        );
      } else {
        setError("Geolocation is not supported by this browser.");
      }
    }, []);
    
    //// fetching Weather information 
    useEffect(() => {
      if (location.latitude && location.longitude) {
        const fetchCityAndZipcode = async (latitude, longitude,pinCode) => {
          const apiKey = 'd7160ebb1d424d408926ca61f9ec4e8a';
          const urlLATLong = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;
          const urlZip=`https://api.opencagedata.com/geocode/v1/json?q=${pinCode}&countrycode=IN&key=${apiKey}`
          const url=pinCode.length===6?urlZip:urlLATLong
          // const url=`https://api.opencagedata.com/geocode/v1/json?key=d7160ebb1d424d408926ca61f9ec4e8a&q=52.3877830%2C+9.7334394&pretty=1&no_annotations=1`
          try {
            const response = await fetch(url);
            const data = await response.json();
            if(data.ok){
              console.log("first")
            }
            if (data.results.length > 0) {
              const components = data.results[0].components;
              // console.log(components)
              setDetails(components);
            } else {
              setError("Location data not found");
            }
          } catch (error) {
            setError("Failed to fetch location data");
          }
        };
       
          fetchCityAndZipcode(location.latitude, location.longitude,pinCode);

   
      }
  }, [location,pinCode]);
  
    //  console.log(location)
  return (
    <div className='flex justify-around grid grid-cols-2 gap-4 items-center'>
        
        <TodayWeather details={details} />
        <Advertise details={details}/>
    </div>
  )
}
