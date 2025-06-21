import React, { useState } from 'react'

export default function CardInfo({myData, showAnswer}) {

    const dataToShow = showAnswer ? myData.answer: myData.question

  return (
    <div className='card-info'>
        <p>{dataToShow}</p>
    </div>
  )
}
