import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import background from './assets/images/travel.jpg'

const App: React.FC = () => {
  return (
    <div className='container'>
      <div className='background'>
        <img src={background} alt="background" />
      </div>
      <div>
      <Navbar />
      </div>
      <div className='content text-justify '>
        <h1>Welcome to AdventureAlly</h1>
        <p>AdventureAlly is the ultimate travel app, offering unique experiences,</p>
        <p> exclusive deals, and seamless itinerary planning.Say hello </p>
        <p> to stress-free adventures and download AdventureAlly today!</p>
      </div>
    </div>
    
  );
}

export default App;


