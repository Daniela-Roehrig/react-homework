import { useDispatch, useSelector } from 'react-redux';
import { answerQuestion } from '../../feature/questionnaire/questionnaireSlice';;
import styles from './Question.module.css';

const Question = ({ question }) => {

  const dispatch = useDispatch();
  const selectedAnswer = useSelector(
    
    (state) => state.questionnaire.answers[question.id]
  );

  const handleChange = (e) => {
    dispatch(answerQuestion({ questionId: question.id, answer: e.target.value }));
  };

  return (
    <div className={styles.question}>
      <h3>{question.text}</h3>
      {question.options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            checked={selectedAnswer === option}
            onChange={handleChange}
            name={`question-${question.id}`}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default Question;
