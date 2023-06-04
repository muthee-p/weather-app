'use client'


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image'
import BarChart from '@components/BarChart'
// import Chart from 'chart.js';
// import moment from 'moment';



const Cities = ({city}) =>{
	
	const [ weather, setWeather] = useState('')
	

	useEffect(() => {
		fetchWeather();
	}, [city]);

// 	useEffect(() => {
  //   if (weather) {
  //     createChart();
  //   }
  // }, [weather]);

	const fetchWeather = async () =>{
		try{
			const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=edb0fe981a251239e860b7e8d4828073`)
			setWeather(response.data);
		}catch (error){
			console.error(error)
		}
	}

// 	const fetchWeatherData = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=edb0fe981a251239e860b7e8d4828073`
  //     );
  //     setWeatherData(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

//  const createChart = () => {
//   const chartData = getChartData();
//   if (chartData){ 
//   	const ctx = document.getElementById('weatherChart');

//   new Chart(ctx, {
//     type: 'line',
//     data: {
//       labels: chartData.labels,
//       datasets: [
//         {
//           label: 'Average Temperature',
//           data: chartData.temperatures,
//           backgroundColor: 'rgba(75, 192, 192, 0.2)',
//           borderColor: 'rgba(75, 192, 192, 1)',
//           borderWidth: 1,
//           fill: 'start',
//         },
//       ],
//     },
//     options: {
//       responsive: true,
//       maintainAspectRatio: false,
//       scales: {
//         x: {
//           type: 'time',
//           time: {
//             unit: 'hour',
//             tooltipFormat: 'MMM D, h:mm a',
//           },
//           title: {
//             display: true,
//             text: 'Time',
//           },
//         },
//         y: {
//           title: {
//             display: true,
//             text: 'Temperature (°C)',
//           },
//         },
//       },
//     },
//   });
// }
// };

//   const getChartData = () => {
//     const labels = [];
//     const temperatures = [];
//     const hourlyData = weather.list;

//     if(hourlyData){

//     for (let i = 0; i < hourlyData.length; i++) {
//       const dateTime = moment(hourlyData[i].dt_txt);
//       const temperature = hourlyData[i].main.temp - 273.15;

//       labels.push(dateTime);
//       temperatures.push(temperature);
//     }

//     return { labels, temperatures };
//   };
// }
	 const getWeatherIcon = (weatherCode) => {
   
    switch (weatherCode) {
      case '01d':
        return <Image src="/assets/icons/sunny.svg" alt="Sunny" width={100} height={24}/>;
      case '01n':
        return <Image src="/assets/icons/night.svg" alt="Clear Night" width={100} height={24} />;
      case '02d':
      case '02n':
        return <Image src="/assets/icons/cloudy.svg" alt="Partly Cloudy" width={100} height={24}/>;
      case '03d':
      case '03n':
      case '04d':
      case '04n':
        return <Image src="/assets/icons/cloud.svg" alt="Cloudy" width={100} height={24} />;
      case '09d':
      case '09n':
      case '10d':
      case '10n':
        return <Image src="/assets/icons/rain.svg" alt="Rainy" width={100} height={24}/>;
      case '11d':
      case '11n':
        return <Image src="/assets/icons/thunderstorm.svg" alt="Thunderstorm" width={100} height={24} />;
      case '13d':
      case '13n':
        return <Image src="/assets/icons/snowy.svg" alt="Snowy" width={100} height={24} />;
      case '50d':
      case '50n':
        return <Image src="/assets/icons/misty.svg" alt="Misty" width={100} height={24}/>;
      default:
        return <span>{weather.weather[0].description}</span>;
    }
  };
	return(
		<div className='bg-gray-600 p-4 m-4 w-64 rounded-xl'>
				<h2>{city}</h2>
				{weather && (
			<div>
			<BarChart />
			 {/*<canvas id="weatherChart" width="400" height="200"></canvas>*/}
				{getWeatherIcon(weather.weather[0].icon)}
				<h2 className='text-2xl'>{Math.round(weather.main.temp - 273.15)}°C</h2>
				<p>Weather: { weather.weather[0].description}</p>
				</div>
				)}
		</div>
		)
}

export default Cities