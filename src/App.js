import React, { useState } from 'react';
import { FaUser, FaUsers, FaWallet, FaSuitcaseRolling, FaPlane } from 'react-icons/fa';
import SearchBox from './components/SearchBox';
import FilterPanel from './components/FilterPanel';
import Account from './components/Account';
import Community from './components/Community';
import ExpenseTracker from './components/ExpenseTracker';
import ItineraryPlanner from './components/ItineraryPlanner';
import TravelPlan from './components/TravelPlan';
import './index.css';

function App() {
  const [activeComponent, setActiveComponent] = useState('account');

  const components = {
    account: <Account />,
    community: <Community />,
    expenseTracker: <ExpenseTracker />,
    itineraryPlanner: <ItineraryPlanner />,
    travelPlan: <TravelPlan />
  };

  return (
    <div className="app">
      <div className="navigation">
        <FaUser onClick={() => setActiveComponent('account')} className="icon" />
        <FaUsers onClick={() => setActiveComponent('community')} className="icon" />
        <FaWallet onClick={() => setActiveComponent('expenseTracker')} className="icon" />
        <FaSuitcaseRolling onClick={() => setActiveComponent('itineraryPlanner')} className="icon" />
        <FaPlane onClick={() => setActiveComponent('travelPlan')} className="icon" />
      </div>
      <div className="main-content">
        <SearchBox />
        <FilterPanel />
        {components[activeComponent]}
      </div>
    </div>
  );
}

export default App;