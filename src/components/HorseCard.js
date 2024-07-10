// src/components/HorseCard.js
import React from 'react';
import '../styles/HorseCard.css';

const HorseCard = ({ name, image }) => {
    return (
        <div className="horse-card">
            <img src={image} alt={name} />
            <h2>{name}</h2>
        </div>
    );
};

export default HorseCard;
