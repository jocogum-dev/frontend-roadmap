import React, { useState } from 'react'

function Sessions({workTime, setWorkTime, shortBreak, setShortBreak, longBreak, setLongBreak, setSessionType, setTimerValue}) {
    const [workSessionActive, setWorkSessionActive] = useState(false);
    const [shortBreakActive, setShortBreakActive] = useState(false);
    const [longBreakActive, setLongBreakActive] = useState(false);

    function setSessionToWork(){
        setSessionType("Work");
        setTimerValue(workTime);
        setWorkSessionActive(true);
        setShortBreakActive(false);
        setLongBreakActive(false);

    }
    function setSessionToShortBreak(){
        setSessionType("Short Break");
        setTimerValue(shortBreak);
        setWorkSessionActive(false);
        setShortBreakActive(true);
        setLongBreakActive(false);
    }
    function setSessionToLongBreak(){
        setSessionType("Long Break");
        setTimerValue(longBreak);
        setWorkSessionActive(false);
        setShortBreakActive(false);
        setLongBreakActive(true);
    }
  
    return (
    <section className="sessions">
        <div>
            <label htmlFor="work-time">Work Time :</label>
            <input onChange={(e) => (setWorkTime(Number(e.target.value)))} id="work-time" type="text" value={workTime} />
            <button className={workSessionActive? "active" : ""} onClick={setSessionToWork} >Work</button>
        </div>
        <div>
            <label htmlFor="short-break">Short Break :</label>
            <input onChange={(e) => (setShortBreak(Number(e.target.value)))} id="short-break" type="text" value={shortBreak} />
            <button className={shortBreakActive? "active" : ""} onClick={setSessionToShortBreak}>Short Break</button>
        </div>
        <div>
            <label htmlFor="long-break">Long Break :</label>
            <input onChange={(e) => (setLongBreak(Number(e.target.value)))} id="long-break" type="text" value={longBreak} />
            <button className={longBreakActive? "active" : ""} onClick={setSessionToLongBreak}>Long Break</button>
        </div>
    </section>
  )
}

export default Sessions