import React, { useState } from 'react'

export default function ProgressBar({currentSlide, maxSlide}) {

    return (
        <section className='progress-bar'>
            <span className='progress' style={{width: `${(currentSlide / maxSlide) * 100}%`}}></span>
            <span className='progress-percent'>{Math.ceil((currentSlide / maxSlide) * 100)}%</span>
            <span className='progress-status'>{currentSlide} of {maxSlide}</span>
        </section>
    )
}
