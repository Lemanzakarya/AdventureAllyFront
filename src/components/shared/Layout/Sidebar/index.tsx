import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios'; // Import the Axios library
import logo from '../../../../assets/images/logo.png';

interface WeatherData {
  main: {
    temp: number;
    humidity:number;
  };
  sys:{
    country:string;
  }
  name:{}
}

interface WeatherWidgetProps {
  latitude: number;
  longitude: number;
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({ latitude, longitude }) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    // Make an API call to fetch weather data from the backend using Axios
      axios.get(`https://adventureallyweb.azurewebsites.net/api/Weather/forecast?latitude=${latitude}&longitude=${longitude}`)
      .then((response: AxiosResponse<WeatherData>) => {
        setWeather(response.data);
      })
      .catch(error => {
        console.error('Failed to fetch weather data:', error);
      });
  }, [latitude, longitude]);

  if (!weather) return null;

  return (
    <div className="text-white">
     <div className="bg-green p-4 rounded-lg m-4 text-center text-white shadow-lg">
      <p className="text-xl font-bold">{(weather.main.temp - 273).toFixed()}°C</p>
      <p className="text-base mt-2">{'Humidity: '+weather.main.humidity+'%'}</p>
      <p className="text-base mt-2">{'Location: '+weather.sys.country+' , '+weather.name}</p>
    </div>
    </div>
  );
};

const Sidebar: React.FC = () => {
  const location = useLocation();
  const latitude: number = 36.884804;
  const longitude: number = 30.704044; 
  
  return (
    <div className="fixed top-0 left-0 h-full bg-lightgreen min-w-60 min-h-screen">
      <div className="">
        <span><img src={logo} className="ml-16 size-24 object-cover" alt="Logo" /></span>
      </div>
      {/* Integrate the WeatherWidget component */}
      <WeatherWidget latitude={latitude} longitude={longitude} />
      <ul className="mt-5 ml-4 space-y-2">
        <li>
          <Link to={'/homepage'}>
            <span className={`flex items-center p-2 pr-14 text-base font-normal hover:text-white text-white rounded-lg hover:bg-darkergreen ${location.pathname === '/homepage' ? 'bg-darkgreen' : ''}`}>Home</span>
          </Link>
        </li>
        <li>
          <Link to={'/tour'}>
            <span className={`flex items-center p-2 pr-14 text-base font-normal hover:text-white text-white rounded-lg hover:bg-darkergreen ${location.pathname === '/tour' ? 'bg-darkgreen' : ''}`}>Tours</span>
          </Link>
        </li>
        <li>
          <Link to={'/profile'}>
            <span className={`flex items-center p-2 pr-14 text-base font-normal hover:text-white text-white rounded-lg hover:bg-darkergreen ${location.pathname === '/profile' ? 'bg-darkgreen' : ''}`}>Profile</span>
          </Link>
        </li>
        <li>
          <Link to={'/map'}>
            <span className={`flex items-center p-2 pr-14 text-base font-normal hover:text-white text-white rounded-lg hover:bg-darkergreen ${location.pathname === '/map' ? 'bg-darkgreen' : ''}`}>Map</span>
          </Link>
        </li>
        <li>
          <Link to={'/'}>
            <span className={`flex items-center p-2 pr-14 text-base font-normal hover:text-white text-white rounded-lg hover:bg-darkergreen ${location.pathname === '/' ? 'bg-darkgreen' : ''}`}>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
