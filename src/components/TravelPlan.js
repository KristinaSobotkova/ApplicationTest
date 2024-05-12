import React, { useState } from 'react';
import '../styles/TravelPlan.css';  

function TravelPlan({ onSave }) {
    const [plan, setPlan] = useState({
        title: '',
        location: '',
        description: '',
        date: ''
    });

    const handleChange = (e) => {
        setPlan({ ...plan, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Saving Travel Plan: ", plan);
        onSave(plan);
    };

    return (
        <div className='container'>
            <h2 className='main-heading'>Create a New Travel Plan</h2>
            <form className='form' onSubmit={handleSubmit}>
                <input className='input'
                    type="text" 
                    name="title" 
                    placeholder="Title of your Travel Plan" 
                    value={plan.title} 
                    onChange={handleChange} 
                />
                <input className='input'
                    type="text" 
                    name="location" 
                    placeholder="Destination" 
                    value={plan.location} 
                    onChange={handleChange} 
                />
                <textarea className='text'
                    name="description" 
                    placeholder="What do you plan to visit?" 
                    value={plan.description} 
                    onChange={handleChange}
                />
                <input className='input'
                    type="date" 
                    name="date" 
                    value={plan.date} 
                    onChange={handleChange} 
                />
                <button className='button' type="submit">Save Travel Plan</button>
            </form>
        </div>
    );
}

export default TravelPlan;