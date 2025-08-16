import React from 'react'

function Start({setStartQuiz}) {
  return (
    <div className='start' >
        <button onClick={() => setStartQuiz(true)}>Start</button>
    </div>
    
  )
}

export default Start