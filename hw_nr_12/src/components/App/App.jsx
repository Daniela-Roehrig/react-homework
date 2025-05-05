
import { useState } from 'react';
import ValueDisplay from '../ValueDisplay/ValueDisplay';

import styles from './App.module.css';

function App() {
  const [currentValue, setCurrentValue] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && inputValue.trim() !== '') {
      setCurrentValue(inputValue);
      setInputValue('');
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
      <ValueDisplay value={currentValue} />
    </div>
  );
}

export default App;
