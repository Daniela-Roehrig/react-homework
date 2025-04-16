import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';

function App() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" component="div">Мy Material UI App</Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ mx: 25, my: 2 }}>
        <Typography variant="h5" gutterBottom>Добро пожаловать в наше приложение!</Typography>
        <Button variant="contained"  size="small"  color="primary" onClick={handleClickOpen}>ОТКРЫТЬ ДИАЛОГОВОЕ ОКНО</Button>
      </Container>
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Использовать Material UI?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Это простое React приложение с использованием Material UI, вы можете настроеть его по своему усмотрению.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">ОТМЕНА</Button>
          <Button onClick={handleClose} color="primary">СОГЛАСЕН</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
