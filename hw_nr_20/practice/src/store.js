import { configureStore } from '@reduxjs/toolkit';
import userReducer from './components/userSlice/userSlice';


const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export default store;