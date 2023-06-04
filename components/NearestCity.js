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
        `https://api.openweathermap.org/data/2.5/weather?${lat ? `lat=${lat}&lon=${lon}` : `q=${city}`}&appid=edb0fe981a251239e860b7e8d4828073`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>{city}</h2>
      {weatherData && (
        <div>
          <p>Temperature: {weatherData.main.temp}</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default NearestCity;
