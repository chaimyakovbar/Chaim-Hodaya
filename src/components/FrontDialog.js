import React from 'react';
import { Link } from 'react-router-dom';
import './FrontDialog.css';

const FrontDialog = () => {
    return (
        <div className="dialog-container">
            <p className="dialog-text">Hodaya & Chaim</p>
            <p className="dialog-date">16.02.2025</p>
            <Link to="/SecPage" className="dialog-link">
                <button className="dialog-button">
                    צפו בהזמנה
                    <div className="arrow-left"></div>
                    <div className="arrow-right"></div>
                </button>
            </Link>
        </div>
    );
};

export default FrontDialog;
