import './MathQuiz.css'
import { useState } from 'react'; 
import Answer from '../Answer/Answer';

const MathQuiz = () => {
  //
  const [points, setPoints] = useState(0);

  // zufällige Ziffern
  const generateNumbers = () => {
    const a = Math.floor(Math.random() * 10) + 1;  
    const b = Math.floor(Math.random() * 10) + 1;  
    return { a, b };
  };

 
/*   const updatePoints = (isCorrect) => {
    if (isCorrect) {
      setPoints(points + 1);  
    } else {
      setPoints(points - 1); 
    }
  }; */
  
  
  const updatePoints = (isCorrect) => {
  
    setPoints((prevPoints) => {
      if (isCorrect) {
        return prevPoints + 1; 
      }
      return prevPoints;  
    });
  };

  const { a, b } = generateNumbers(); // Generieren der Zahlen für Aufgabe

  return (
    <div className="quizContainer">
      <h1>Math Quiz</h1>
      <p>Current Score: {points}</p>
      <p>{a} + {b} = ?</p>
      <Answer a={a} b={b} updatePoints={updatePoints} />
    </div>
  );
};

export default MathQuiz;