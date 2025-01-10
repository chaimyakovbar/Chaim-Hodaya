import React, { useEffect, useState } from 'react';
import './CountdownTimer.css';

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    function calculateTimeLeft() {
        const weddingDate = new Date('2025-02-16T00:00:00');
        const now = new Date();
        const difference = weddingDate - now;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    }

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span key={interval} className="timer-component">
                {timeLeft[interval]} {interval}{' '}
            </span>
        );
    });

    return (
        <div className="countdown-timer">
            {timerComponents.length ? timerComponents : <span>!מזל טוב! יום החתונה הגיע</span>}
        </div>
    );
};

export default CountdownTimer;
