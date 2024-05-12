import React from 'react';
import logo from '../assets/logo.png';
import '../styles/TopNavBar.css'

function TopNavBar({ setCurrentView }) {
  return (
    <div className='top-nav-bar'>
      <img src={logo} alt="TripTrek Logo" className="logo" />
      <div className="icons" >
        <button className='button' onClick={() => setCurrentView('Account')}>Account</button>
        <button className='button' onClick={() => setCurrentView('ItineraryPlanner')}>Itinerary Planner</button>
        <button className='button' onClick={() => setCurrentView('Community')}>Community</button>
        <button className='button' onClick={() => setCurrentView('ExpenseTracker')}>Expense Tracker</button>
      </div>
    </div>
  );
}

export default TopNavBar;
