import { useEffect, useRef } from 'react';

function ValueDisplay({ currentValue, previousValue }) {
  const prevValueRef = useRef(previousValue); 
 
  useEffect(() => {
    prevValueRef.current = previousValue; 
  }, [previousValue]); 

  return (
    <div>
      <p><strong>Current Value:</strong> {currentValue}</p>
      <p><strong>Previous Value:</strong> {prevValueRef.current}</p>
    </div>
  );
}

export default ValueDisplay;
