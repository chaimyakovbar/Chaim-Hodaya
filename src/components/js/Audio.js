import React from 'react'

const Audio= () => {
  return (
          <audio autoPlay loop>
                <source src={require('../assets/audio2.mp3')} type="audio/mpeg" />
            </audio>
  )
}

export default Audio