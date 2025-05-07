
import { useSelector } from 'react-redux';
import styles from './Result.module.css';

const Result = () => {
  const result = useSelector((state) => state.questionnaire.result);

  if (!result) return null;

  return (
    <div className={styles.result}>
      <h2>{result.message}</h2>
      <p>Your Score: {result.score}</p>
    </div>
  );
};

export default Result;
