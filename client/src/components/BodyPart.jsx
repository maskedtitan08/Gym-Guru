import React from 'react';
import Icon from '../assets/icons/gym.png';
import './Home.css';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
    <div
        role="button"
        tabIndex={0} // tabIndex allows the div to be focused like a button
        className={`bodyPart-card ${bodyPart === item ? 'active' : ''}`}
        onClick={() => {
            setBodyPart(item);
            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
        }}
    >
        <img src={Icon} alt="dumbbell" className="icon" />
        <h2 className="bodyPart-text">{item}</h2>
    </div>
);

export default BodyPart;
