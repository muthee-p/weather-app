'use client'


import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import Weather from '@components/Weather';
import Cities from '@components/Cities';
import Nav from '@components/Nav'
import BarChart from '@components/BarChart'
import NearestCity from '@components/NearestCity'


export default function Home() {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <Nav />
          {userLocation && (
          <NearestCity
            city="Nearest City"
            lat={userLocation.lat}
            lon={userLocation.lon}
          />
        )}
          <Weather />
          <BarChart />
          <h3 className='m-6 text-xl'>Suggested Cities</h3>
          <div className='flex justify-between flex-col md:flex-row'>
          <Cities city='London'/>
          <Cities city='Paris'/>
          <Cities city='Tokyo'/>
          <Cities city='Nairobi'/>
          </div>

    </main>
  )
}
