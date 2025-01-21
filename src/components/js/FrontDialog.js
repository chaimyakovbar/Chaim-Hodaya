import React from 'react';
import { Link } from 'react-router-dom';
import '../css/FrontDialog.css';
import FontImage from '../assets/Font.jpg'; // ייבוא התמונה

const FrontDialog = () => {
    return (
        <div className="dialog-container">
            <Link to="/SecPage" className="dialog-link">
                <button className="dialog-button">
                    לחץ לצפיה  בהזמנה
                    <div>
                        <img width={'100%'} src={FontImage} alt="Font" className="dialog-image" /> {/* שימוש בתמונה */}
                    </div>
                    <div className="arrow-left"></div>
                    <div className="arrow-right"></div>
                </button>
            </Link>
        </div>
    );
};

export default FrontDialog;
