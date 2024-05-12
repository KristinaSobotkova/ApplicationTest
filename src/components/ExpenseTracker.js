import React, { useState } from 'react';
import '../styles/ExpenseTracker.css'; 

function ExpenseTracker() {
    const [expenses, setExpenses] = useState([]);
    const [formData, setFormData] = useState({
        description: '',
        amount: '',
        currency: 'USD'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newExpense = {
            ...formData,
            id: Date.now(), 
            spentAmount: 0 
        };
        setExpenses([...expenses, newExpense]);
        setFormData({ description: '', amount: '', currency: '' }); 
    };

    const handleSpentChange = (id, spent) => {
        setExpenses(expenses.map(exp => {
            if (exp.id === id) {
                const updatedSpentAmount = exp.spentAmount + parseFloat(spent || 0);
                return { ...exp, spentAmount: updatedSpentAmount };
            }
            return exp;
        }));
    };

    const handleDelete = (id) => {
        const newExpenses = expenses.filter(exp => exp.id !== id);
        setExpenses(newExpenses);
    };

    return (
        <div className='expense-tracker'>
            <h2 className='heading'>Expense Tracker</h2>
            <form className='form' onSubmit={handleSubmit}>
                <input className='input'
                    type="text"
                    name="description"
                    placeholder="Expense Description"
                    value={formData.description}
                    onChange={handleChange}
                />
                <input className='input'
                    type="number"
                    name="amount"
                    placeholder="Initial Amount"
                    value={formData.amount}
                    onChange={handleChange}
                />
                <select className='select' name="currency" value={formData.currency} onChange={handleChange}>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="CZK">CZK</option>
                </select>
                <button className='button' type="submit">Add Expense</button>
            </form>
            <ul className='ul'>
                {expenses.map(exp => (
                    <li className='li' key={exp.id}>
                        {exp.description} - {exp.amount} {exp.currency} (Spent: {exp.spentAmount})
                        <input 
                            type="number" 
                            placeholder="Enter amount spent"
                            onBlur={(e) => handleSpentChange(exp.id, e.target.value)}
                        />
                        <button onClick={() => handleDelete(exp.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ExpenseTracker;