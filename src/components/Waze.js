import React from 'react'
import { faWaze } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Waze = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            width: '30px',
            height: '15px',
            borderRadius: '8px',
            backgroundColor: 'rgb(241 241 241)',
            position: 'absolute',
            left: '177px',
            top: '431px',
            border: '1px solid black',
            alignItems: 'flex-end',
        }}>
            <a href='https://waze.com/ul/hsv8v81sgu'
                style={{ textDecoration: 'none', color: 'inherit' }}>
                <FontAwesomeIcon icon={faWaze} style={{ fontSize: '10px' }} />
            </a>
        </div >
    )
}

export default Waze