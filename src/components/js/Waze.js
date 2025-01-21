import React, { useState, useEffect } from 'react';
import { faWaze } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/Waze.css';

const Waze = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 5500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div style={{marginLeft: '39%', marginTop: 10, marginBottom: 10}} className={`waze-container ${isVisible ? 'fade-in' : ''}`}>
            <a 
                href='https://waze.com/ul/hsv8v81sgu'
                style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    width: '100%',
                    height: '100%',
                }}
            >
                <FontAwesomeIcon icon={faWaze} style={{ fontSize: '10px' }} />
                <div style={{ fontSize: '10px' }}>
                    פתח בוויז
                </div>
            </a>
        </div>
    );
}

export default Waze;
