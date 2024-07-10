// src/components/LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import HorseCard from './HorseCard';
import '../styles/LandingPage.css';
import horseData from '../horseData';

const LandingPage = () => {
    const navigate = useNavigate();

    const handleBookNow = () => {
        navigate('/booking');
    };

    return (
        <div className="landing-page">
            <h1>Welcome to Horse Ride Booking</h1>
            <div className="horses">
                {horseData.map((horse) => (
                    <HorseCard key={horse.id} name={horse.name} image={horse.image} />
                ))}
            </div>
            {/* <button onClick={handleBookNow}>Book Now</button> */}
            <button class="button" onClick={handleBookNow}>Book Now</button>
        </div>
    );
};

export default LandingPage;
