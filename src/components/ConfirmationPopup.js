// src/components/ConfirmationPopup.js
import React from 'react';
import '../styles/ConfirmationPopup.css';

const ConfirmationPopup = ({ bookingDetails, onClose }) => {
    return (
        <div className="confirmation-popup">
            <button className="close-btn" onClick={onClose}>X</button>
            <h2>Booking Confirmed!</h2>
            <p>Thank you for booking a ride with {bookingDetails.horse}.</p>
            <p>We have sent a calendar invite to {bookingDetails.email}.</p>
        </div>
    );
};

export default ConfirmationPopup;
