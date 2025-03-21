import React, { useState } from 'react';

function HackathonRegistration({ hackathonName }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        team: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        const newErrors = {};

    // Validate Full Name
        if (!formData.name.trim()) {
            newErrors.name = 'Full Name is required';
        }

    // Validate Email
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

    // Validate Phone Number
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone Number is required';
        } else if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = 'Phone Number must be 10 digits';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            alert(`Thank you for registering for ${hackathonName}!`);
            console.log('Form Data:', formData);
        } else {
            alert('Please fix the errors in the form.');
        }
    };

    return (
        <div className="registration-page" id="registration-form">
        <h2>Register for {hackathonName}</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
            />
            {errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
            />
            {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
            </div>

            <div className="form-group">
            <label htmlFor="team">Team Name (optional):</label>
            <input
                type="text"
                id="team"
                name="team"
                value={formData.team}
                onChange={handleChange}
                placeholder="Enter your team name"
            />
            </div>

            <button type="submit" className="submit-button">
            Submit
            </button>
        </form>
        </div>
    );
}

export default HackathonRegistration;