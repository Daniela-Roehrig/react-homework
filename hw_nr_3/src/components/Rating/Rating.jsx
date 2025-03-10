import { useState } from 'react';
import { ratingList } from './ratingList';
import styles from './Rating.module.css';
console.log(styles)

const Rating = () => {
  const [ratingValue, setRatingValue] = useState(0);

  const handleRating = (index) => {
    setRatingValue(index);
  };

  return (
    <div className={styles.ratingContainer}>
      <img
        src={ratingList[ratingValue] || ratingList[0]} // Direkt den Index verwenden
        alt="Rating"
        className={styles.ratingImage}
      />
      <div className={styles.buttonsContainer}>
        <button onClick={() => handleRating(0)}>Плохо</button>
        <button onClick={() => handleRating(1)}>Приемлемо</button>
        <button onClick={() => handleRating(2)}>Хорошо</button>
        <button onClick={() => handleRating(3)}>Отлично</button>
      </div>
      <p className={styles.ratingPara}>Вы выбрали рейтинг: {ratingValue + 1}</p>
    </div>
  );
};

export default Rating;