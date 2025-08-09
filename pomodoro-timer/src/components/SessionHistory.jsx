import React from 'react'

function SessionHistory({sessionHistory}) {
  return (
    <section className='session-history'>
        <h2>Session History</h2>
        <ul>
            {
                (sessionHistory.length === 0 ) ? (
                    <li>No History yet</li>
                )
                : (
                    sessionHistory.map((session, index) => (
                        <li key={index}>{session}</li>
                    ))
                )
            }
        </ul>
    </section>
  )
}

export default SessionHistory