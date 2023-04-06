import bookDetailsReducer, {
  clearReviewError,
  clearSendReview,
  fetchBookDetails,
  fetchReview,
} from './features/book-details-slice';
import bookingReducer, {
  addBookIdForBooking,
  addBookOccupied,
  clearBookIdForBooking,
  clearBookingError,
  clearBookingSuccess,
  clearBookOccupied,
  fetchBooking,
  fetchCancelBooking,
  fetchEditBooking,
} from './features/booking-slice';
import booksReducer, {
  changeBooksBySearch,
  changeDisplayedBooks,
  changeDisplayedBooksByCategory,
  changeDisplayedBooksByRating,
  changeRatingType,
  changeSearchValue,
  fetchBooks,
} from './features/books-slice';
import categoriesReducer, { fetchCategories } from './features/categories-slice';
import forgotPasswordReducer, {
  fetchResetPassword,
  fetchSendEmail,
  putDataRequestReset,
} from './features/forgot-password-slice';
import registrationUserReducer, {
  clearRegistration,
  fetchRegistrationUser,
  putUser,
} from './features/registration-user-slice';
import userReducer, { clearAuth, fetchAuthUser, logout, putAuthUser } from './features/user-slice';
import { getBookDetails } from './selectors/book-details-selector';
import { getBooking } from './selectors/booking-selector';
import { getBooks } from './selectors/books-selectors';
import { getCategories } from './selectors/categories-selectors';
import { getForgotPasswordInfo } from './selectors/forgot-password-selector';
import { getRegistrationUserInfo } from './selectors/registration-user-selector';
import { getUserInfo } from './selectors/user-selector';
import { useAppDispatch, useAppSelector } from './hooks';
import { store } from './store';

export {
  booksReducer,
  categoriesReducer,
  bookDetailsReducer,
  userReducer,
  registrationUserReducer,
  forgotPasswordReducer,
  store,
  useAppDispatch,
  useAppSelector,
  fetchBookDetails,
  fetchReview,
  clearReviewError,
  clearSendReview,
  fetchBooks,
  changeRatingType,
  changeDisplayedBooksByRating,
  changeDisplayedBooksByCategory,
  changeDisplayedBooks,
  changeSearchValue,
  changeBooksBySearch,
  fetchCategories,
  fetchSendEmail,
  fetchResetPassword,
  putDataRequestReset,
  fetchRegistrationUser,
  clearRegistration,
  putUser,
  fetchAuthUser,
  clearAuth,
  putAuthUser,
  logout,
  getBookDetails,
  getBooks,
  getCategories,
  getForgotPasswordInfo,
  getRegistrationUserInfo,
  getUserInfo,
  fetchBooking,
  clearBookingError,
  bookingReducer,
  getBooking,
  addBookIdForBooking,
  clearBookIdForBooking,
  addBookOccupied,
  clearBookOccupied,
  fetchCancelBooking,
  fetchEditBooking,
  clearBookingSuccess,
};
