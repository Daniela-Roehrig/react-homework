import React from 'react';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';

const ThemedButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.getContrastText(theme.palette.primary.main),
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export default function ThemeToggleButton({ onClick }) {
  return (
    <ThemedButton variant="contained" onClick={onClick}>
      Toggle Theme
    </ThemedButton>
  );
}
