import React from 'react';

import './SecPage.css';
import Video from './Video';
import CalculationTimeWedding from './CalculationTimeWedding'
import Waze from './Waze';
// import ThirdPage from './ThirdPage';
// import FuordPage from './FuordPage';

const SecPage = () => {
    return (
        <div>
            
            <CalculationTimeWedding />
            <Video />
            <Waze />
            {/* <ThirdPage />
            <FuordPage /> */}
        </div >
    );
};

export default SecPage;
