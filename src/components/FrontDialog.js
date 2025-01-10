import React from 'react';
import { Link } from 'react-router-dom'; // חשוב לייבא את Link מ-react-router-dom

const FrontDialog = () => {
    return (
        <div
            style={{
                display: 'flex',
                marginTop: '20%',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <p>Hodaya & Chaim</p>
            <p>16.02.2025</p>
            <Link
                to="/SecPage"  // זה יוביל לדף השני
                style={{
                    textDecoration: "none",
                    color: "inherit",
                    marginTop: "20px",
                }}
            >
                <button>
                    צפו בהזמנה
                </button>
            </Link>
        </div>
    );
};

export default FrontDialog;