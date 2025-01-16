import React from 'react';

import './SecPage.css';
import Video from './Video';
import CalculationTimeWedding from './CalculationTimeWedding'
import Waze from './Waze';
import Sentence from './Sentence';
// import ThirdPage from './ThirdPage';
// import FuordPage from './FuordPage';

const SecPage = () => {
    return (
        <div>
            <Sentence />
            <Video />
            <Waze />
            <CalculationTimeWedding />
            {/* <ThirdPage /> */}
            {/* <FuordPage /> */}
        </div >
    );
};

export default SecPage;
