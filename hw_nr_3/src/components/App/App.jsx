import React from 'react';
import Rating from '../Rating/Rating';
import List from '../List/List';
import styles from './App.module.css';
console.log(styles)

const App = () => {
  return (
    <>
      <div className={styles.ratingContainer}>
        <h1>Choose your rating</h1>
        <Rating />
      </div>
      
      
        <List />
      
    </>
  );
};

export default App;
