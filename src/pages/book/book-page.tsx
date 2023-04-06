/* eslint-disable complexity */
/* eslint-disable no-useless-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  BookDescription,
  BookDetails,
  BookingModal,
  Breadcrumbs,
  Error,
  Loader,
  ModalOuter,
  Success,
} from '../../components';
import { useWindowSize } from '../../hooks';
import {
  clearBookIdForBooking,
  clearBookingError,
  clearBookingSuccess,
  clearBookOccupied,
  fetchBookDetails,
  getBookDetails,
  useAppDispatch,
  useAppSelector,
} from '../../store';
import { getBooking } from '../../store/selectors/booking-selector';
import { Breakpoint } from '../../ui';

export const BookPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { isLoadingBookDetails, errorBookDetails, book, errorSendReview, sendReviewId, isSendReview } =
    useAppSelector(getBookDetails);
  const { isLoadingBooking, errorBooking, bookingId, cancelBookingId, bookOccupied, successBooking, bookIdForBooking } =
    useAppSelector(getBooking);
  const { width = 0 } = useWindowSize();
  const [isOpenModalBooking, toggleIsOpenModalBooking] = useState(false);

  useEffect(() => {
    if (errorBooking) {
      setTimeout(() => {
        dispatch(clearBookingError());

        if (bookOccupied) {
          dispatch(clearBookOccupied());
        }

        if (bookIdForBooking) {
          dispatch(clearBookIdForBooking());
        }
      }, 4000);
    }

    if (successBooking) {
      setTimeout(() => {
        dispatch(clearBookingSuccess());

        if (bookOccupied) {
          dispatch(clearBookOccupied());
        }

        if (bookIdForBooking) {
          dispatch(clearBookIdForBooking());
        }
      }, 4000);
    }
  }, [errorBooking, successBooking]);

  useEffect(() => {
    if (id) {
      dispatch(fetchBookDetails(id));
    }
  }, [dispatch, id, sendReviewId, bookingId, cancelBookingId]);

  return (
    <React.Fragment>
      <Breadcrumbs />

      {(isLoadingBookDetails || isLoadingBooking) &&
        (width < Breakpoint.SM ? <Loader size={42} /> : width < Breakpoint.MD ? <Loader size={64} /> : <Loader />)}

      {((!isLoadingBookDetails && errorBookDetails) || errorSendReview || errorBooking) && (
        <Error>
          {errorBookDetails && 'Что-то пошло не так. Обновите страницу через некоторое время.'}
          {errorSendReview && 'Оценка не была отправлена. Попробуйте позже!'}
          {errorBooking && `${errorBooking}`}
        </Error>
      )}

      {(isSendReview || successBooking) && (
        <Success>
          {isSendReview && 'Спасибо, что нашли время оценить книгу!'}
          {successBooking && `${successBooking}`}
        </Success>
      )}

      {book && !errorBookDetails && !isLoadingBookDetails && (
        <React.Fragment>
          <BookDetails
            openModal={() => {
              toggleIsOpenModalBooking(true);
            }}
          />
          <BookDescription />
        </React.Fragment>
      )}

      {isOpenModalBooking && (
        <ModalOuter
          closeModal={() => {
            toggleIsOpenModalBooking(false);
          }}
          dataTestId='booking-modal'
        >
          <BookingModal
            closeModal={() => {
              toggleIsOpenModalBooking(false);
            }}
          />
        </ModalOuter>
      )}
    </React.Fragment>
  );
};
