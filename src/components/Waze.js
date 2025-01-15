import React, { useState, useEffect } from 'react';
import { faWaze } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Waze.css'; // קובץ CSS חיצוני

const Waze = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 6000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`waze-container ${isVisible ? 'fade-in' : ''}`}>
            <a href='https://waze.com/ul/hsv8v81sgu'
                style={{ textDecoration: 'none', color: 'inherit', fontSize: '12px' }}>
                <FontAwesomeIcon icon={faWaze} style={{ fontSize: '10px' }} />
            </a>
            <div style={{ fontSize: '10px' }}>
                פתח בוויז
            </div>
        </div>
    );
}

export default Waze;
