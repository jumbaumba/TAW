import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../store/themeSlice'; // путь под свой проект
import userSlice from './userSlice';
import themeSlice from './themeSlice';


export const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;