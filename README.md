A weather application built using Next.js that feathes data from OpenWeather API. It provides a simple interface to display the current weather information for multiple cities. Also uses Geo location to display the weather in the nearest user's city.![image](https://github.com/muthee-p/weather-app/assets/117924809/77358efb-7b4b-45d0-b3ff-93531513c58c)


Here's a summary of the app's functionality:

1. **Homepage**: The app's homepage displays a title, "Weather App," and a container that shows the weather information for multiple cities.

2. **City Selection**: The app is designed to display weather information for four cities: London, Paris, New York, and Tokyo. You can easily extend the list by adding more cities to the homepage in the `Home` component.

3. **API Integration**: The app makes use of the OpenWeatherMap API to fetch weather data for the specified cities. It sends HTTP requests to the API, retrieves the weather information in JSON format, and extracts relevant data such as temperature and weather description.

![image](https://github.com/muthee-p/weather-app/assets/117924809/542cfc8d-c675-4b86-a2b9-5b0c152969d1)

4. **Weather Icons**: The app includes functionality to display weather icons or images based on the weather condition. The `getWeatherIcon` function maps the weather condition code received from the API to the appropriate weather icon or image, providing a visual representation of the weather conditions.

5. **Temperature Conversion**: The app converts the temperature data received from the API, which is in Kelvin, to degrees Celsius. It performs the conversion in the `Weather` component and displays the temperature in degrees Celsius on the homepage.

![image](https://github.com/muthee-p/weather-app/assets/117924809/f9f2f84d-5a77-440b-88f1-3c3b0e35d2b9)

6. **Chart Component**: Additionally, the app includes a `LineChart` component that utilizes the `react-chartjs-2` library to render a line chart. The chart displays the temperatures for the specified cities on the y-axis, with the city names as labels on the x-axis.

By combining Next.js, React, and external APIs, this weather app provides an interactive and informative user interface to display the current weather conditions in multiple cities.

![image](https://github.com/muthee-p/weather-app/assets/117924809/1d9e0596-f061-4068-a646-384ab84a18cb)



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


