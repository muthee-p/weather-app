'use client'

import Image from 'next/image'
import NearestCity from './NearestCity'
import React, { useEffect, useState } from 'react';


const Nav = () =>{
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
		<div className='top-0 fixed w-full flex justify-center pr-8 pl-8 bg-slate-900 backdrop-filter backdrop-blur-lg bg-opacity-30 z-10'>
        <div className='flex justify-between items-center p-2 w-[90%]'>
          <div className='flex items-center'>
            <Image
              src="/logo.svg"
              alt="Next Weather Logo"
              className="dark:invert"
              width={58}
              height={58}
              priority
            />
            <h2 className='text-xl font-mono'>Next Weather</h2>
            </div>
            {userLocation && (
              <NearestCity
                city="Nearest City"
                lat={userLocation.lat}
                lon={userLocation.lon}
              />
            )}
        </div>
      </div>
		)
}

export default Nav