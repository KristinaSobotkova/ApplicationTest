import React, { useState } from 'react';
import '../styles/Account.css'

function Account() {
    const [user, setUser] = useState(null);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        birthDate: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/user/list', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    birthDate: formData.birthDate
                })
            });
            const data = await response.json();
            if (response.ok) {
                setUser(data);
                console.log("User registred", data);
            } else {
                throw new Error(data.message || "Failed to registr");
            }
        } catch (error) {
            console.error("Registration error: ", error.message);
        }
    };

    return (
        <div className='account'>
            <h2 className='heading'>Account</h2>
            {!user ? (
                <form onSubmit={handleSubmit}>
                    <input className='input' type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
                    <input className='input' type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
                    <input className='input' type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                    <input className='input' type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} />
                    <button type="submit" className='button'>Register</button>
                </form>
            ) : (
                <div>
                    <h1 className='user-details'>Welcome, {user.firstName}!</h1>
                </div>
            )}
        </div>
    );
}

export default Account;