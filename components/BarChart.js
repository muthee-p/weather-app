'use client'

import React, { useState, useEffect } from 'react';
import axios from'axios';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const cities = ['Nairobi', 'London', 'Paris', 'New York', 'Tokyo', 'Dubai', 'Barcelona', 'Rome', 'Madrid'];
      const promises = cities.map((city) =>
        fetchWeatherData(city)
      );
      const data = await Promise.all(promises);
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchWeatherData = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      const temperature = Math.round(response.data.main.temp - 273.15);
      return temperature;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const data = {
    labels: ['Nairobi', 'London', 'Paris', 'New York', 'Tokyo', 'Dubai', 'Barcelona', 'Rome', 'Madrid'],
    datasets: [
      {
        label: 'Temperature (°C)',
        data: weatherData,
        backgroundColor: 'rgba(0, 123, 255, 0.2)',
        borderColor: 'rgba(0, 123, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {};

  return (
    <div className='w-full md:h-[400px] mt-12'>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
