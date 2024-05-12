import React from 'react';
import Account from './Account';
import ItineraryPlanner from './ItineraryPlanner';
import Community from './Community';
import ExpenseTracker from './ExpenseTracker';

function MainContentArea({ currentView }) {
  switch(currentView) {
    case 'Account':
      return <Account />;
    case 'ItineraryPlanner':
      return <ItineraryPlanner />;
    case 'Community':
      return <Community />;
    case 'ExpenseTracker':
      return <ExpenseTracker />;
    default:
      return <div>Welcome to TripTrek!</div>;
  }
}

export default MainContentArea;
