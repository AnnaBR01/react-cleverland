/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable complexity */
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useWindowSize } from '../../hooks';
import { ROUTE } from '../../routes/routes';
import {
  clearBookingError,
  clearBookingSuccess,
  clearBookOccupied,
  getBooking,
  getBooks,
  useAppDispatch,
  useAppSelector,
} from '../../store';
import { Breakpoint } from '../../ui';
import { BookingModal, Error, HorizontalBookCard, Loader, ModalOuter, Success, VerticalBookCard } from '..';

import { NoBooks, StyledHorizontalBooksContent, StyledVerticalBooksContent } from './styles';

interface IProps {
  isColumn: boolean;
  isSquare: boolean;
}

export const BooksContent = ({ isColumn, isSquare }: IProps) => {
  const dispatch = useAppDispatch();
  const { displayedBooks, searchValue, booksBySearch } = useAppSelector(getBooks);
  const { state } = useLocation();
  const [isOpenModalBooking, toggleIsOpenModalBooking] = useState(false);
  const { width = 0 } = useWindowSize();
  const { isLoadingBooking, errorBooking, bookOccupied, successBooking } = useAppSelector(getBooking);

  const pathStateUrl = state && state.value && state.value.pathValue !== null ? state.value.pathValue : 'all';
  const nameStateCategory =
    state && state.value && state.value.nameValue !== null ? state.value.nameValue : 'Все книги';
  const renderedBooks = searchValue ? booksBySearch : displayedBooks;

  useEffect(() => {
    if (errorBooking) {
      setTimeout(() => {
        dispatch(clearBookingError());
        if (bookOccupied) {
          dispatch(clearBookOccupied());
        }
      }, 4000);
    }

    if (successBooking) {
      setTimeout(() => {
        dispatch(clearBookingSuccess());
        if (bookOccupied) {
          dispatch(clearBookOccupied());
        }
      }, 4000);
    }
  }, [errorBooking, successBooking]);

  return (
    <div data-test-id='content'>
      {displayedBooks.length > 0 ? (
        searchValue && booksBySearch.length === 0 ? (
          <NoBooks data-test-id='search-result-not-found'>По запросу ничего не найдено</NoBooks>
        ) : (
          <React.Fragment>
            {isColumn && (
              <StyledHorizontalBooksContent>
                {renderedBooks.map((book) => (
                  <Link
                    to={`${ROUTE.BOOKS}/${pathStateUrl}/${book.id}`}
                    key={book.id}
                    state={{ nameCategory: nameStateCategory, nameBook: book.title, pathCategory: pathStateUrl }}
                  >
                    <HorizontalBookCard
                      book={book}
                      openModal={() => {
                        toggleIsOpenModalBooking(true);
                      }}
                    />
                  </Link>
                ))}
              </StyledHorizontalBooksContent>
            )}
            {isSquare && (
              <StyledVerticalBooksContent>
                {renderedBooks.map((book) => (
                  <Link
                    to={`${ROUTE.BOOKS}/${pathStateUrl}/${book.id}`}
                    key={book.id}
                    state={{ nameCategory: nameStateCategory, nameBook: book.title, pathCategory: pathStateUrl }}
                  >
                    <VerticalBookCard
                      book={book}
                      openModal={() => {
                        toggleIsOpenModalBooking(true);
                      }}
                    />
                  </Link>
                ))}
              </StyledVerticalBooksContent>
            )}
          </React.Fragment>
        )
      ) : (
        <NoBooks data-test-id='empty-category'>В этой категории книг ещё нет</NoBooks>
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

      {isLoadingBooking &&
        (width < Breakpoint.SM ? <Loader size={42} /> : width < Breakpoint.MD ? <Loader size={64} /> : <Loader />)}

      {successBooking && <Success>{successBooking}</Success>}

      {errorBooking && <Error>{errorBooking}</Error>}
    </div>
  );
};
