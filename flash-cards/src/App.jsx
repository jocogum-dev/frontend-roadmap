import { useState } from "react";
import CardInfo from "./components/CardInfo";
import ProgressBar from "./components/ProgressBar";
import myData from "./data/data.json"


function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  
  function handlePrevious() {
    if(currentSlide >= 1) {
      setCurrentSlide(currentSlide-1);
      setShowAnswer(false);
    }
  }
  function handleNext() {
    if(currentSlide <= myData.length-1){
      setCurrentSlide(currentSlide+1);
      setShowAnswer(false);
    }
  }

  function handleToggleAnswer() {
    setShowAnswer(!showAnswer);
  }

  return (
    <main>
      <h1>Flash Cards</h1>
      <ProgressBar currentSlide={currentSlide+1} maxSlide={myData.length} />
      <section className="card">
        <CardInfo myData={myData[currentSlide]} showAnswer={showAnswer}/>
        <div className="card-actions">
          <button onClick={handlePrevious}>Previous</button>
          <button onClick={handleToggleAnswer}>{showAnswer ? "Hide Answer" : "Show Answer"}</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </section>
    </main>
  )
}

export default App
