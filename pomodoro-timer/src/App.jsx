import { useEffect, useState } from "react"
import Header from "./components/Header"
import Timer from "./components/Timer"
import Sessions from "./components/Sessions";
import SessionHistory from "./components/SessionHistory";

function App() {
  const [workTime, setWorkTime] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);
  const [sessionType, setSessionType] = useState("Work");
  const [timerValue, setTimerValue] = useState(workTime);
  const [sessionHistory, setSessionHistory] = useState([]);

  return (
    <main>
      <Header />
      <Sessions workTime={workTime} setWorkTime={setWorkTime} shortBreak={shortBreak} setShortBreak={setShortBreak} longBreak={longBreak} setLongBreak={setLongBreak} setSessionType={setSessionType} setTimerValue={setTimerValue} sessionHistory={sessionHistory} />
      <Timer session={sessionType} timerValue={timerValue} setSessionHistory={setSessionHistory}  />
      <SessionHistory sessionHistory={sessionHistory} />
    </main>
  )
}

export default App
