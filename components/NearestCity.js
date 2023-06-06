'use client'


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getWeatherIcon } from '@utils/weatherUtils'
import Image from 'next/image'

const NearestCity = ({ city, lat, lon }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [locationEnabled, setLocationEnabled] = useState(false);

  useEffect(() => {
    fetchWeatherData();
  }, [city, lat, lon]);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?${lat ? `lat=${lat}&lon=${lon}` : `q=${city}`}&appid=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      setWeatherData(response.data);
      setLocationEnabled(true)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
    {!locationEnabled ? (
      <p className='text-blue-500 font-mono'>Please Enable your location</p>
      ):(
    <div>
      {weatherData && (
        <div className='flex justify-around items-center'>
        
        <Image 
          src="/assets/icons/location.svg" 
          alt="Location icon" 
          width={25} 
          height={25}
          style={{ fill: "blue" }}
        />
        <h2 className='text-lg text-blue-500 font-mono'>{weatherData.name}</h2>
       
        
        <div className='w-[10%] hidden md:block'>
        {getWeatherIcon(weatherData.weather[0].icon)}
        </div>
        
          <p>{Math.round(weatherData.main.temp - 273.15)}°C </p>
          <p className='font-mono hidden md:block'>{weatherData.weather[0].description}</p>
        
        
        </div>
      )}
      </div>
      )}
    </div>
  );
};

export default NearestCity;
