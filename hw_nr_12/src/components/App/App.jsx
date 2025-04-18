import { useState } from 'react';
import styles from './App.module.css';
import ValueDisplay from '../ValueDisplay/ValueDisplay';

function App() {
  const [currentValue, setCurrentValue] = useState(''); 
  const [previousValue, setPreviousValue] = useState(''); 
  const [inputValue, setInputValue] = useState(''); 

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      if (inputValue.trim() !== '') {
        setPreviousValue(currentValue); 
        setCurrentValue(inputValue); 
        setInputValue(''); 
      }
    }
  };

  return (
    <div className={styles.app}>
      <h1>Current and Previous Value</h1>
      <input
        type="text"
        value={inputValue} 
        onChange={handleInputChange} 
        onKeyDown={handleKeyPress} 
        placeholder="Enter text"
      />
      <ValueDisplay currentValue={currentValue} previousValue={previousValue} />
    </div>
  );
}

export default App;
