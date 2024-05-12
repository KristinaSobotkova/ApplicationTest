import React, { useState } from 'react';
import '../styles/ItineraryPlanner.css';

function ItineraryPlanner() {
    const [entries, setEntries] = useState([]);
    const [form, setForm] = useState({ date: '', note: '' });
    const [editingId, setEditingId] = useState(null);

    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingId) {
            const updatedEntries = entries.map(entry => 
                entry.id === editingId ? { ...entry, ...form } : entry
            );
            setEntries(updatedEntries);
            setEditingId(null);
        } else {
            const newEntry = { ...form, id: Date.now() };
            setEntries([...entries, newEntry]);
        }
        setForm({ date: '', note: '' });
    };

    const handleEdit = (entry) => {
        setForm(entry);
        setEditingId(entry.id);
    };

    const handleDelete = (id) => {
        setEntries(entries.filter(entry => entry.id !== id));
    };

    return (
        <div className='itinerary-planner'>
            <h2 className='heading'>Itinerary Planner</h2>
            <form className='form' onSubmit={handleSubmit}>
                <input className='input'
                    type="date" 
                    name="date" 
                    value={form.date} 
                    onChange={handleInputChange} 
                    required 
                />
                <textarea className='text'
                    name="note" 
                    placeholder="Add a note for this day..." 
                    value={form.note} 
                    onChange={handleInputChange}
                    required 
                />
                <button className='button' type="submit">{editingId ? 'Update' : 'Add'} Entry</button>
            </form>
            <ul className='ul'>
                {entries.map(entry => (
                    <li className='li' key={entry.id}>
                        <strong>{entry.date}</strong>: {entry.note}
                        <button className='button' onClick={() => handleEdit(entry)}>Edit</button>
                        <button className='button' onClick={() => handleDelete(entry.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ItineraryPlanner;