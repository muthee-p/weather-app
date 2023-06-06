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
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 max-w-[90%]">
          <Nav />
      <div className='w-full'>
        <div className='flex justify-between flex-col md:flex-row'>
          <div className='md:w-[60%]'>
            <Weather />
            
            <BarChart />
          </div>

          <div className='md:w-[40%] '>
            <h3 className='m-6 text-xl font-mono'>Suggested Cities</h3>
            <div className='flex justify-between flex-col'>
              <div className='flex flex-col md:flex-row'>
                <Cities city='London'/>
                <Cities city='Paris'/>
              </div>
              <div className='flex flex-col md:flex-row'>
                <Cities city='Tokyo'/>
                <Cities city='Nairobi'/>
              </div>
            </div>
          </div>

          </div>
      </div>
    </main>
  )
}
