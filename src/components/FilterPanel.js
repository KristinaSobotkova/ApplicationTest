import React from 'react';

function FilterPanel() {
  return (
    <div className="filter-panel">
      <select className='select' name="dates">
        <option value="">Select Dates</option>
        {/* Dates possibilities */}
      </select>
      <select className='select' name="budget">
        <option value="">Select Budget</option>
        {/* Budget possibilities */}
      </select>
      <select className='select' name="interests">
        <option value="">Select Interests</option>
        {/* Interests possibilities */}
      </select>
      <select className='select' name="travel-type">
        <option value="">Select Travel Type</option>
        {/* Travel types */}
      </select>
      <button className='button'>Search</button>
    </div>
  );
}

export default FilterPanel;