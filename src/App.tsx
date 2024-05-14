import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import background from './assets/images/travel.jpg'
import { useNavigate } from 'react-router-dom'; 

const App: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='background'>
        <img src={background} alt="background" />
      </div>
      <Navbar />
      <div className="grid grid-cols-2 text-white mt-24">
      <div className='pl-6'>      
          <h1 className='text-2xl'>Welcome to AdventureAlly</h1>     
          <h2 className='mt-3 text-xl pr-6'> AdventureAlly is the ultimate travel app, offering unique experiences, 
            exclusive deals, and seamless itinerary planning. Say hello to stress-free 
            adventures and download AdventureAlly today!</h2>
        </div>
        <div></div>
        <div>
        <button className='bg-white rounded-full py-2 px-10 text-base text-green font-bold mx-9 mt-9 shadow-lg' onClick={()=> navigate('/login')}>LOGIN</button>
        <button className='bg-white rounded-full py-2 px-10 text-base text-green font-bold mx-9 mt-9 shadow-lg' onClick={()=> navigate('/signup')}>SIGN UP</button>
          </div>
        </div>
    </>
  );
}

export default App;



