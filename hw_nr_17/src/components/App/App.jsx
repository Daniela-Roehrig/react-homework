import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Typography } from '@mui/material';
import { lightTheme, darkTheme } from '../../context/ThemeContext';
import ThemeToggleButton from '../ThemeToggleButtons/ThemeToggleButtons';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const currentTheme = darkMode ? darkTheme : lightTheme;

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <div style={{ padding: '2rem' }}>
        <Typography variant="h4" gutterBottom>
          {darkMode ? 'Dark Mode' : 'Light Mode'}
        </Typography>
        <ThemeToggleButton onClick={toggleTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
