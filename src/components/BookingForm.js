// src/components/BookingForm.js
import React, { useState } from 'react';
import horseData from '../horseData';
import ConfirmationPopup from './ConfirmationPopup';
import '../styles/BookingForm.css';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        horse: '',
        date: '',
        time: '',
        name: '',
        email: '',
        phone: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [bookingDetails, setBookingDetails] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const selectedHorse = horseData.find(horse => horse.id === parseInt(formData.horse));
        const details = {
            horse: selectedHorse ? selectedHorse.name : '',
            date: formData.date,
            time: formData.time,
            name: formData.name,
            email: formData.email,
            phone: formData.phone
        };
        setBookingDetails(details);
        setIsSubmitted(true);
    };

    const handleClosePopup = () => {
        setIsSubmitted(false);
        setBookingDetails(null);
        // Optionally reset the form here
    };

    return (
        <div className="booking-form-container">
            <h2>Booking Form</h2> 
            <form className="booking-form" onSubmit={handleSubmit}>
                <label>
                    Horse:
                    <select name="horse" value={formData.horse} onChange={handleChange} required>
                        <option value="">Select a horse</option>
                        {horseData.map(horse => (
                            <option key={horse.id} value={horse.id}>{horse.name}</option>
                        ))}
                    </select>
                </label>
                <label>
                    Date:
                    <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                </label>
                <label>
                    Time:
                    <input type="time" name="time" value={formData.time} onChange={handleChange} required />
                </label>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <label>
                    Phone:
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                </label>
                <button type="submit">Submit</button>
            </form>

            {isSubmitted && (
                <ConfirmationPopup bookingDetails={bookingDetails} onClose={handleClosePopup} />
            )}
        </div>
    );
};

export default BookingForm;
