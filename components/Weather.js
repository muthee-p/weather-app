'use client'


import React, { useState } from 'react';
import axios from 'axios';



const Weather = () =>{
	const [city, setCity ] = useState('');
	const [ weather, setWeather] = useState('')
	
	const fetchWeather = async () =>{
		try{
			const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=edb0fe981a251239e860b7e8d4828073`)
			setWeather(response.data);
		}catch (error){
			console.error(error)
		}
	}
	return(
		<div>
			<input type='text' value={city} onChange={(e) => setCity(e.target.value)} />
			<button onClick ={ fetchWeather}> view Weather </button>

			{weather && (
				<div>
				<h2>{weather.name}</h2>
				<p>Temp:{weather.main.temp}</p>
				<p>Weather: { weather.weather[0].description}</p>
				</div>
				)}
		</div>
		)
}

export default Weather
