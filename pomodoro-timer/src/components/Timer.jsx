import React, { useEffect, useState } from 'react'

function Timer({timerValue, session, setSessionHistory}) {
    const [currentTime, setCurrentTime] = useState(timerValue * 60);
    const [isRunning, setIsRunning] = useState(false);

    function stopTimer() {
        setCurrentTime(timerValue * 60);
        setIsRunning(false)
    }
    function toggleRunning(){
        setIsRunning(prev => !prev);
    }
    function formatTime(totalSeconds) {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    }
    function PlaySound(){
        const audio = new Audio("/alarm.wav"); // public folder
        audio.play();
    }

    useEffect(() => {
        setCurrentTime(timerValue * 60);
    }, [timerValue]);

    useEffect(()=> {
        let interval;

        if(isRunning && currentTime > 0) {
            interval = setInterval(()=>{
                setCurrentTime(prev => prev-1);
            }, 10);
        } else if(currentTime === 0) {
            stopTimer();
            PlaySound();
            setSessionHistory(prev =>[...prev, session]);
        }

        return () => (clearInterval(interval));

    },[isRunning, currentTime, timerValue]);

    return (
        <section className='pomodoro'>
            <div className="session">
                Session: {session}
            </div>
            <div className="current-time">
                {formatTime(currentTime)}
            </div>
            <div className="actions">
                <button onClick={toggleRunning} className='start-pause'>{isRunning ? "Pause" : "Start"}</button>
                {isRunning && <button onClick={stopTimer}  className='stop'>Stop</button>}
                
            </div>
        </section>
    )
}

export default Timer