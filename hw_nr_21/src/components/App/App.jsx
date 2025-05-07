import { useDispatch, useSelector } from 'react-redux';
import { submitAnswers } from '../../feature/questionnaire/questionnaireSlice';
import Question from '../Question/Question';
import Result from '../Result/Result';

import styles from './App.module.css'

const App = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questionnaire.questions);

  const handleSubmit = () => {
    dispatch(submitAnswers());
  };

  return (
    <div className={styles.box}>
      <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} >Questionnaire</h1>
      {questions.map((question) => (
        <Question key={question.id} question={question} />
      ))}
      <button className={styles.button} onClick={handleSubmit}>Submit</button>
      <Result />
    </div>
  );
};

export default App;
