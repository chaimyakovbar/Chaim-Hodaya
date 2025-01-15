import React from 'react';

const Video = () => {
    return (
        <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
            <video width="100%" height="400px" autoPlay muted playsInline>
                <source src={require('./chaimvideo.mp4')} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default Video;
