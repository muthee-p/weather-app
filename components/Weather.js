'use client'


import React, { useState } from 'react';
import axios from 'axios';



const Weather = () =>{

	const [city, setCity ] = useState('');
	const [ weather, setWeather] = useState('')
	
	const fetchWeather = async () =>{
		try{
			const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_API_KEY}`)
			setWeather(response.data);
		}catch (error){
			console.error(error)
		}
	}
	return(
		<div className=' card mt-4 pl-2 mb-4 md:w-[70%]'>
		<div className='flex items-center justify-around'>
			<input
			className='rounded-full pl-4 p-2 w-32 md:w-64 text-gray-700' 
			type='text' value={city} 
			onChange={(e) => setCity(e.target.value)} 
			placeholder='search weather'/>
			<button onClick ={ fetchWeather} className='black_btn ml-4'> Search </button>
			</div>
			{weather && (
				<div className='p-4 rounded-xl mt-2'>
					<h2 className='text-lg text-blue-500'>{weather.name}</h2>
					<p>{Math.round(weather.main.temp - 273.15)}°C</p>
					<p>Weather: { weather.weather[0].description}</p>
				</div>
				)}
		</div>
		)
}

export default Weather
