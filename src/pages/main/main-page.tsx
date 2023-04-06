import { useEffect } from 'react';

import { BooksList } from '../../components';
import { fetchBooks, getBooking, useAppDispatch, useAppSelector } from '../../store';

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const { bookingId, cancelBookingId } = useAppSelector(getBooking);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch, bookingId, cancelBookingId]);

  return <BooksList />;
};
