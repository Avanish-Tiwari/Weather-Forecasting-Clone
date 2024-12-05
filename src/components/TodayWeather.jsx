import React, { useContext, useEffect, useState } from 'react';
import Dailywrapper from './Dailywrapper';
import { DayCodeContext } from './DayCode';

export default function TodayWeather({ details }) {
  const apiKey = '15489ad96f7743d440c65fb26d030eb0';
  const [weatherDetails, setWeatherDetails] = useState({});
  const [error, setError] = useState('');
  const [ selectedDay, setSelectedDay ] = useContext(DayCodeContext);


  const fetchWeather = async () => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?zip=${details.postcode ?? details.zipcode},${details.country_code}&appid=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      setWeatherDetails(data);
      setError(''); // Clear any previous errors
    } catch (error) {
      setError(error.message);
      setWeatherDetails(null); // Clear previous data if there's an error
    }
  };

  useEffect(() => {
    if (details.country_code) {
      fetchWeather();
    }
  }, [details]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!weatherDetails.list) {
    return <div>Loading...</div>;
  }

  // Recalculate filterDate on every render to ensure selectedDay changes trigger updates
  const filterDate = weatherDetails.list.filter(item => item.dt_txt.includes("12:00:00"));
  // console.log(filterDate[selectedDay])
  // Check if filterDate has enough data for the selectedDay
  if (!filterDate[selectedDay]) {
    return <div>No data available for the selected day.</div>;
  }

  // Log the selected day's date
  // console.log('Selected Day Date:', new Date(filterDate[selectedDay]?.dt_txt));
  // console.log('Filter Date:', filterDate);
  // console.log('Weather Details:', weatherDetails);
  return (
    <div className="p-4 m-4 gap-4 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-500">
      {/* This will now re-render when selectedDay changes */}
      <Dailywrapper data={filterDate[selectedDay]} />
      <div>
        {details.city??details.county} {weatherDetails.name}, {details.zipcode ?? details.postcode}, {details.state_district}, {details.state}
      </div>
    </div>
  );
}
