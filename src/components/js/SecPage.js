import React from 'react';

import '../css/SecPage.css';
// import Video from './Video';
import CalculationTimeWedding from './CalculationTimeWedding'
import Waze from './Waze';
import Sentence from './Sentence';
import Audio from './Audio';

const SecPage = () => {
    return (
        <div style={{height: '359px', position: 'absolute', top: '-12px', left: '0px'}}>
            <Audio />
            <Sentence />
            {/* <Video /> */}
            <Waze />
            <CalculationTimeWedding />
        </div >
    );
};

export default SecPage;
