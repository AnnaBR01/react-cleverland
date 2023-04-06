import { configureStore } from '@reduxjs/toolkit';

import {
  bookDetailsReducer,
  bookingReducer,
  booksReducer,
  categoriesReducer,
  forgotPasswordReducer,
  registrationUserReducer,
  userReducer,
} from '.';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
    bookDetails: bookDetailsReducer,
    user: userReducer,
    registrationUser: registrationUserReducer,
    forgotPassword: forgotPasswordReducer,
    booking: bookingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
