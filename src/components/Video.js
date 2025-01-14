import React from 'react';

const Video = () => {
    return (
        <video  width="100%" height="400px"style={{marginTop: '50%'}} autoPlay muted>
            <source src={require('./chaimvideo.mp4')} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export default Video;
