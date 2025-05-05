import { useEffect, useRef, useState } from 'react';

function ValueDisplay({ value }) {
  const previousValueRef = useRef('');
  const [previousValue, setPreviousValue] = useState('');

  useEffect(() => {
    setPreviousValue(previousValueRef.current);
    previousValueRef.current = value;
  }, [value]);

  return (
    <div>
      <p><strong>Current Value:</strong> {value}</p>
      <p><strong>Previous Value:</strong> {previousValue}</p>
    </div>
  );
}

export default ValueDisplay;
