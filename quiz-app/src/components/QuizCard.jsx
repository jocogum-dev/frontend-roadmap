import React, { useState } from 'react'
import questionsData from "../data/questions.json"

function QuizCard() {
    const [questionNumber, setQuestionNumber] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedChoice, setSelectedChoice] = useState(null);
    const [selectedChoiceWrong, setSelectedChoiceWrong] = useState(false);
    const [revealAnswer, setRevealAnswer] = useState(false);

    function handleAnswer(choice, index) {
        setSelectedChoice(index);
        if(choice === questionsData[questionNumber].answer) {
            setScore((prev) => prev +1);
            setSelectedChoiceWrong(false);
            setRevealAnswer(false);
        }
        else {
            setSelectedChoiceWrong(true);
            setRevealAnswer(true);
        }
        setTimeout(() => {
            setQuestionNumber((prev) => prev + 1);
            setSelectedChoice(null);
            setSelectedChoiceWrong(false);
            setRevealAnswer(false);
        }, 2000);
    }

    if(questionNumber === questionsData.length) {
        return (
            <div className='score'>
                <div>Your score:</div>
                <h2>{score}</h2>
            </div>
        )
    }

    return (
    <section className='question-card'>
        <h4>{questionsData[questionNumber].question}</h4>
        <div>
        {questionsData[questionNumber].options.map((choice, index) => {
            return (
                <button 
                    onClick={() => handleAnswer(choice, index)} 
                    className={`
                        ${selectedChoice === index ? "active choices" : "choices"} 
                        ${(selectedChoiceWrong && selectedChoice === index) ? "wrong" : "" } 
                        ${(revealAnswer && choice === questionsData[questionNumber].answer) ? "correct" : ""}
                        `} 
                    key={index}>
                        {choice}
                </button>
            );
        })}
        </div>
    </section>
    )
}

export default QuizCard;