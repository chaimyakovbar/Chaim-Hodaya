import React, { useEffect, useState } from 'react';
import '../css/CountdownTimer.css';

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    function calculateTimeLeft() {
        const weddingDate = new Date('2025-02-16T00:00:00')
        const now = new Date()
        const difference = weddingDate - now

        let timeLeft = {};
   
        if (difference > 0) {
            timeLeft = {
                days: Math.max(Math.floor(difference / (1000 * 60 * 60 * 24)), 0),
                hours: Math.max(Math.floor((difference / (1000 * 60 * 60)) % 24), 0),
                minutes: Math.max(Math.floor((difference / 1000 / 60) % 60), 0),
                seconds: Math.max(Math.floor((difference / 1000) % 60), 0),
            };
        }

        return timeLeft;
    }

    // פונקציה שמוודאת שהמספרים תמיד עם אפס מוביל
    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <div key={interval} className="timer-component">
                <span>{formatTime(timeLeft[interval])}</span>
                <span className="label">{interval}</span>
            </div>
        );
    });

    return (
        <div className="countdown-timer">
            {timerComponents.length ? timerComponents : <span>!מזל טוב! יום החתונה הגיע</span>}
        </div>
    );
};

export default CountdownTimer;
