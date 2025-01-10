import React from 'react';
import './SecPage.css'; // נוסיף את קובץ ה-CSS

const SecPage = () => {
    return (
        <div className="container">
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
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
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
        </div>
    );
};

export default SecPage;
