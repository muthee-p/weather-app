'use client'


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image'



const Cities = ({city}) =>{
	
	const [ weather, setWeather] = useState('')
	

	useEffect(() => {
		fetchWeather();
	}, [city]);


	const fetchWeather = async () =>{
		try{
			const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=edb0fe981a251239e860b7e8d4828073`)
			setWeather(response.data);
		}catch (error){
			console.error(error)
		}
	}

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
			
				{getWeatherIcon(weather.weather[0].icon)}
				<h2 className='text-2xl'>{Math.round(weather.main.temp - 273.15)}°C</h2>
				<p>Weather: { weather.weather[0].description}</p>
				</div>
				)}
		</div>
		)
}

export default Cities