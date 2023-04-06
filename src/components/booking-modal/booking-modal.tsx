/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState } from 'react';

import { CrossMarkIcon } from '../../assets';
import { useWindowSize } from '../../hooks';
import {
  clearBookOccupied,
  fetchBooking,
  fetchCancelBooking,
  fetchEditBooking,
  getBookDetails,
  getBooking,
  getUserInfo,
  useAppDispatch,
  useAppSelector,
} from '../../store';
import { Breakpoint } from '../../ui';
import { ButtonOccupied, Calendar, PrimaryButton } from '..';

import { CloseButton, Title } from './styles';

interface IProps {
  closeModal: () => void;
}

export const BookingModal = ({ closeModal }: IProps) => {
  const dispatch = useAppDispatch();
  const { book } = useAppSelector(getBookDetails);
  const { user } = useAppSelector(getUserInfo);
  const { bookIdForBooking, bookOccupied } = useAppSelector(getBooking);
  const { width = 0 } = useWindowSize();
  const [selectedDate, setSelectedDay] = useState(new Date());
  const [dateReserve, setDateReserve] = useState<Date | null>(null);

  const handleCloseModal = () => {
    closeModal();
    if (bookOccupied) {
      dispatch(clearBookOccupied());
    }
  };

  const handleBooking = () => {
    if (dateReserve) {
      const value = dateReserve.getTimezoneOffset();
      const adaptedDate = new Date(dateReserve.getTime() - value * 60 * 1000);

      bookOccupied
        ? dispatch(
            fetchEditBooking({
              id: bookOccupied.id,
              body: {
                data: {
                  order: true,
                  dateOrder: adaptedDate.toJSON(),
                  book: bookIdForBooking ? String(bookIdForBooking) : String(book.id),
                  customer: String(user.id),
                },
              },
            })
          ).finally(() => {
            closeModal();
          })
        : dispatch(
            fetchBooking({
              data: {
                order: true,
                dateOrder: adaptedDate.toJSON(),
                book: bookIdForBooking ? String(bookIdForBooking) : String(book.id),
                customer: String(user.id),
              },
            })
          ).finally(() => {
            closeModal();
          });
    }
  };

  const handleCancelBooking = () => {
    if (bookOccupied?.id) {
      dispatch(fetchCancelBooking(bookOccupied.id)).finally(() => {
        closeModal();
        dispatch(clearBookOccupied());
      });
    }
  };

  return (
    <React.Fragment>
      <Title data-test-id='modal-title'>
        {bookOccupied?.id ? 'Изменение даты\nбронирования' : 'Выбор даты бронирования'}
      </Title>
      <CloseButton onClick={handleCloseModal} data-test-id='modal-close-button'>
        <CrossMarkIcon width={width < Breakpoint.SM ? 16 : 24} height={width < Breakpoint.SM ? 16 : 24} />
      </CloseButton>
      <Calendar
        selectDate={setSelectedDay}
        selectedDate={selectedDate}
        dateReserve={dateReserve}
        setDateReserve={setDateReserve}
      />

      <PrimaryButton
        allWidth={true}
        fontSize={16}
        padding={14}
        isBig={true}
        dataTestId='booking-button'
        onClick={handleBooking}
        disabled={!dateReserve || (!!bookOccupied?.id && !dateReserve)}
      >
        забронировать
      </PrimaryButton>

      {bookOccupied?.id && (
        <ButtonOccupied
          allWidth={true}
          fontSize={16}
          padding={14}
          isBig={true}
          dataTestId='booking-cancel-button'
          onClick={handleCancelBooking}
        >
          отменить бронь
        </ButtonOccupied>
      )}
    </React.Fragment>
  );
};
