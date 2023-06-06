'use client'


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image'
import { getWeatherIcon } from '@utils/weatherUtils'



const Cities = ({city}) =>{
	
	const [ weather, setWeather] = useState('')
	

	useEffect(() => {
		fetchWeather();
	}, [city]);


	const fetchWeather = async () =>{
		try{
			const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_API_KEY}`)
			setWeather(response.data);
		}catch (error){
			console.error(error)
		}
	}

	 
	return(
		<div className='card m-4 w-64'>
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