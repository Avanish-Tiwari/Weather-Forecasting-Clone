import React, { useContext, useEffect, useState } from 'react';
import { PinCodeContext } from './PinCodeContext';

export default function Dailywrapper({ data }) {
    const [time,setTime]=useState("")

    useEffect(()=>{
        // console.log(data.dt_txt)
        const test=new Date(data.dt_txt)
        setTime(test.toISOString().split("T")[0])

    },[data])
    
    // console.log(time)   
    // Check if data is valid (not null or undefined and has necessary properties)
    if (!data.main) {
        return <>Loading</>; // Render nothing if data is invalid
    }
    const iconUrl = `https://openweathermap.org/img/wn/01n@2x.png`;


    return (
        <div className="daily-wrapper">
            <div className="info">
            {/* <img src={iconUrl} alt="Weather Icon" /> */}
                <h2 className="date">
                    <span className="module-header sub date">{time}</span>
                </h2>
                <div className="temp">
                    <span className="high">Max Temp {data.main.temp_max}°</span>
                    <span className="low">/ Min Temp {data.main.temp_min}°</span>
                </div>
            </div>
            <div className="precip">
                Humidity {data.main.humidity}%
            </div>

            <div className="half-day-card-content ">
                <div className="phrase"></div>

                <div className="panels">
                    <div className="left">
                        <p className="panel-item">RealFeel®<span className="value"> {data.main.feels_like}°</span></p>
                        <p className="panel-item">Cloud Cover<span className="value"> {data.weather[0].main}</span></p>
                    </div>

                    <div className="right">
                        <p className="panel-item">Wind<span className="value"> {data.wind.speed}</span></p>
                        <p className="panel-item">Wind Gusts<span className="value"> {data.wind.gust}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}