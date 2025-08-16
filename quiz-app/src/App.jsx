import Header from "./components/Header"
import QuizCard from "./components/QuizCard"
import Start from "./components/Start"
import { useState } from "react";

function App() {
  const [startQuiz, setStartQuiz] = useState(false);

  return (
  <main>
    <Header />
    {!startQuiz && <Start setStartQuiz={setStartQuiz} />}
    {startQuiz && <QuizCard /> }
  </main>
  )
}

export default App
