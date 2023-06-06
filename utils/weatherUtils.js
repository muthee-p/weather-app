import Image from 'next/image'


export const getWeatherIcon = (weatherCode) => {
   
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