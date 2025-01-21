import React from 'react';

const Video = () => {
    return (
        <div style={{ maxWidth: '800px', marginTop: '355px'}}>
            <video width="100%" height="400px" autoPlay muted playsInline>
                <source src={require('./video2.mp4')} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default Video;
