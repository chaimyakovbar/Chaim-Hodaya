import React from 'react';
import './SecPage.css';
import CalculationTimeWedding from './CalculationTimeWedding';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWaze } from '@fortawesome/free-brands-svg-icons';

const FuordPage = () => {
    return (
        <div className="container">
            <audio autoPlay loop>
                <source src={require('./audio2.mp3')} type="audio/mpeg" />
            </audio>
            <div className="invitation">
                <div className="section">
                    <p className="animated-text">בסיעתא דשמיא</p>
                    <p className="animated-text">בשבח והודיה להשם יתברך נרגשים להזמינכם לשמחת ילדנו היקרים</p>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <h2 className="names animated-text">הודיה רחל</h2>
                        <p style={{ marginRight: '30px' }}></p>
                        <h2 className="names animated-text">חיים יעקב</h2>
                    </div>
                    <p className="animated-text">נרגשים להזמינכם לחגוג עמנו את היום המאושר בחיינו שיערך ביום ראשון (אור ליום שני)</p>
                    <p className="animated-text">16/2/25 י״ח שבט</p>
                    <p className="animated-text">באולם קולוניה דרך מנחם בגין ,רחובות</p>
                    <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                        <div>
                            <p>קבלת פנים </p>
                            <p>18:30</p>
                        </div>
                        <div>
                            <p>חופה</p>
                            <p>19:30</p>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around'}}>
                    <div className="section">
                        <p className="animated-text">משפחת הכלה</p>
                        <p className="animated-text">שלום (דידיה) יעל שטיין</p>
                        <p className="animated-text">משה (מרסל) וגבי שטיין</p>
                        <p className="animated-text">  סילבן (גבריאל) וז׳וסלין ולנסי</p>
                    </div>
                    <div className="section">
                        <p className="animated-text">משפחת החתן</p>
                        <p className="animated-text">חיה הלפרין</p>
                        <p className="animated-text"> הרב רפאל ברטינה סימונה הלפרין ז״ל</p>
                    </div>
                </div>
                <CalculationTimeWedding />
                <div style={{ border: '#00b2ff solid 2px', width: '50px', borderRadius: '8px', marginLeft: '40%' }}>
                    <a href='https://waze.com/ul/hsv8v81sgu'
                        style={{ textDecoration: 'none', color: 'inherit' }}>
                        <FontAwesomeIcon icon={faWaze} style={{ fontSize: '25px' }} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FuordPage;
