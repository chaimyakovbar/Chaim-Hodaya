import React from 'react';
import './SecPage.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const SecPage = () => {
    return (
        <div className="container">
            <audio autoPlay loop>
                <source src={require('./audio.mp3')} type="audio/mpeg" />
            </audio>

            <div className="invitation">
                <div className="section">
                    <p className="animated-text">בעזהשית</p>
                    <p className="animated-text">בשבח והודיה להשם יתברך נרגשים להזמינכם לשמחת ילדנו היקרים</p>
                    <h2 className="names animated-text">חיים יעקב & הודיה רחל</h2>
                    <p className="animated-text">נרגשים להזמינכם לחגוג עמנו את היום המאושר בחיינו שיערך ביום ראשון</p>
                    <p className="animated-text">16/2/25 י״ח שבט</p>
                    <p className="animated-text">באולם קולוניה דרך מנחם בגין ,רחובות</p>
                    <p className="animated-text">קבלת פנים 18:00/18:30</p>
                    <p className="animated-text">חופה 19:00/19:30</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div className="section">
                        <p className="animated-text">משפחת החתן</p>
                        <p className="animated-text">חיה הלפרין</p>
                        <p className="animated-text">הרב רפאל הלפרין ז״ל</p>
                        <p className="animated-text">ברטינה סימונה ז״ל</p>
                    </div>
                    <div className="section">
                        <p className="animated-text">משפחת הכלה</p>
                        <p className="animated-text">שלום (דידיה) יעל שטיין</p>
                        <p className="animated-text">משה (מרסל) וגבי שטיין</p>
                        <p className="animated-text">סילבן וז׳וסלין ולנסי</p>
                    </div>
                </div>
            </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px'}}>
                    <LocationOnIcon />
                    <a href='https://waze.com/ul?a=share_drive&locale=iw&sd=-sV8XO84lU96tavmnQ-sd&env=il&utm_source=waze_app&utm_campaign=share_drive'
                     style={{  textDecoration: 'none',  color: 'inherit'}}>
                        Bne Brak
                    </a>
                </div>
        </div>
    );
};

export default SecPage;
