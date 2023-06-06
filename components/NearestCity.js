'use client'


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NearestCity = ({ city, lat, lon }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchWeatherData();
  }, [city, lat, lon]);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?${lat ? `lat=${lat}&lon=${lon}` : `q=${city}`}&appid=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className= 'card'>
      <h2>{city}</h2>
      {weatherData && (
        <div>
          <p>Temperature: {Math.round(weatherData.main.temp - 273.15)}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default NearestCity;
