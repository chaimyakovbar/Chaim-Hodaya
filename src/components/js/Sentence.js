import React from 'react'

const Sentence = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* <h1 style={{ display: 'flex', justifyContent: 'center', marginTop: '65px', fontSize: '40px' }}>Chaim & Hodaya</h1> */}
            {/* 
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '30px' }}>
                <div style={{ width: '10%', height: '1px', backgroundColor: 'black' }}></div>
                <div style={{ margin: '0 10px', whiteSpace: 'nowrap' }}>16/2/25 י״ח שבט</div>
                <div style={{ width: '10%', height: '1px', backgroundColor: 'black' }}></div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', fontSize: '12px', marginTop: '32px' }}>
                <p style={{ margin: 0}}>״כל אדם עוטה אור הבוקע ועולה השמימה</p>
                <p style={{ margin: 0}}>וכשנפגשות שתי נשמות אשר זו לזו נועדו, מתלכד אורן </p>
                <p style={{ margin: 0}}>לאלומה אחת וקרן אור גדולה שבעתיים מבהיקה מהוייתן האחת״</p>
                <br></br>
                <p style={{ margin: 0}}>( הבעל שם טוב )</p>
                </div> */}
            <video width="100%" autoPlay muted playsInline>
                <source style={{height: '100px'}} src={require('../assets/video1.mp4')} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <video width="100%" autoPlay muted playsInline>
                <source src={require('../assets/video2.mp4')} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

        </div>
    )
}

export default Sentence