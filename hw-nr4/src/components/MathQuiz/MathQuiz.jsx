import './MathQuiz.css'
import { useState } from 'react'; 
import Answer from '../Answer/Answer';

// Funktion außerhalb der Komponente, um die Frage zu generieren
const generateNumbers = () => {
  const a = Math.floor(Math.random() * 10) + 1;  
  const b = Math.floor(Math.random() * 10) + 1;  
  return { a, b };
};

const MathQuiz = () => {
  const [points, setPoints] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");  // Fehlernachricht für falsche Antworten
  const [currentQuestion, setCurrentQuestion] = useState(generateNumbers()); // Speichern der aktuellen Frage

  // Funktion zur Aktualisierung der Punkte und Generierung einer neuen Frage
  const updatePoints = (isCorrect) => {
    if (isCorrect) {
      setPoints((prevPoints) => prevPoints + 1);
      setErrorMessage(""); 
    } else {
      setErrorMessage("Incorrect answer!");  
    }
    

    setCurrentQuestion(generateNumbers());
  };

  return (
    <div className="quizContainer">
      <h1>Math Quiz</h1>
      <p>Current Score: {points}</p>
      <p>{currentQuestion.a} + {currentQuestion.b} = ?</p>
      {errorMessage && <p className="errorMessage">{errorMessage}</p>} {/* Anzeige der Fehlermeldung */}
      <Answer 
        a={currentQuestion.a} 
        b={currentQuestion.b} 
        updatePoints={updatePoints} 
      />
    </div>
  );
};

export default MathQuiz;
