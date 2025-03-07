import { useState } from 'react'; 

const Answer = ({ a, b, updatePoints }) => {
    const [userAnswer, setUserAnswer] = useState(''); 
    const [error, setError] = useState(''); 
  
    // Функция для обработки ввода
    const handleInputChange = (event) => {
      setUserAnswer(event.target.value);
      setError(''); // Очистка ошибки при новом вводе
    };
  
    // Функция для проверки ответа
    const handleSubmit = (event) => {
      event.preventDefault();  // Предотвращаем перезагрузку страницы при отправке формы
  
      const correctAnswer = a + b;
      const isCorrect = parseInt(userAnswer) === correctAnswer;
  
      if (isNaN(userAnswer) || userAnswer === '') {
        setError('Please enter a valid number!');
        return;
      }
  
      updatePoints(isCorrect);  // Обновляем счёт в родительском компоненте
      setUserAnswer(''); // Очищаем поле ввода
    };
  
    return (
      <div className="answerContainer">
        <form onSubmit={handleSubmit}>
          <input 
            type="number" 
            value={userAnswer} 
            onChange={handleInputChange} 
            placeholder="Your answer"
          />
          <button type="submit">Check Answer</button>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
    );
  };
  
  export default Answer;