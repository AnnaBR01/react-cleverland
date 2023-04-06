/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-negated-condition */
import { MouseEvent, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { NoImageIcon } from '../../assets';
import {
  addBookIdForBooking,
  addBookOccupied,
  getBooks,
  getUserInfo,
  useAppDispatch,
  useAppSelector,
} from '../../store';
import { IBook } from '../../types/types';
import { setDateFormatForButton } from '../../utils';
import { ButtonOccupied, ButtonOccupiedUntil, Hightlight, PrimaryButton, Stars } from '..';

import {
  Image,
  NoImage,
  StyledVerticalBookCard,
  SubTitle,
  Text,
  Title,
  WrapperImage,
  WrapperText,
  WrapperTitle,
} from './styles';

interface IProps {
  book: IBook;
  openModal: () => void;
}

export const VerticalBookCard = ({ book, openModal }: IProps) => {
  const dispatch = useAppDispatch();
  const { image, issueYear, authors, title, rating, booking, delivery, id } = book;
  const { searchValue } = useAppSelector(getBooks);
  const { user } = useAppSelector(getUserInfo);

  const light = useCallback((str: string) => <Hightlight filter={searchValue} str={str} />, [searchValue]);

  const openModalBooking = (e: MouseEvent<HTMLElement>, id: number): void => {
    e.preventDefault();
    dispatch(addBookIdForBooking(id));
    openModal();
  };

  const openModalCancelBooking = (
    e: MouseEvent<HTMLElement>,
    bookingId: number,
    bookingDateOrder: string,
    BookEditId: number
  ): void => {
    e.preventDefault();
    dispatch(addBookOccupied({ id: bookingId, createdAt: bookingDateOrder }));
    dispatch(addBookIdForBooking(BookEditId));

    openModal();
  };

  return (
    <StyledVerticalBookCard data-test-id='card'>
      <WrapperImage>
        {image === null ? (
          <NoImage>
            <NoImageIcon />
          </NoImage>
        ) : (
          <Image src={`https://strapi.cleverland.by${image.url}`} alt={title} />
        )}
      </WrapperImage>

      <Stars rating={rating} gap={6} />

      <WrapperTitle>
        <Title>{light(title)}</Title>
      </WrapperTitle>

      <SubTitle>
        <WrapperText>
          {authors !== null && authors.map((author) => <Text key={uuidv4()}>{author}, </Text>)}
          {issueYear && <Text>{issueYear}</Text>}
        </WrapperText>
      </SubTitle>

      {!booking ? (
        delivery && delivery.dateHandedTo ? (
          <ButtonOccupiedUntil large={174} middle={174} small={186} dataTestId='booking-button'>
            {`Занята до ${setDateFormatForButton(delivery.dateHandedTo)}`}
          </ButtonOccupiedUntil>
        ) : (
          <PrimaryButton
            large={174}
            middle={174}
            small={186}
            dataTestId='booking-button'
            onClick={(e) => {
              openModalBooking(e, id);
            }}
          >
            Забронировать
          </PrimaryButton>
        )
      ) : booking.customerId === user.id ? (
        <ButtonOccupied
          large={174}
          middle={174}
          small={186}
          dataTestId='booking-button'
          onClick={(e) => {
            if (booking.dateOrder) {
              openModalCancelBooking(e, booking.id, booking.dateOrder, id);
            }
          }}
        >
          Забронирована
        </ButtonOccupied>
      ) : (
        <ButtonOccupiedUntil large={174} middle={174} small={186} dataTestId='booking-button'>
          Забронирована
        </ButtonOccupiedUntil>
      )}
    </StyledVerticalBookCard>
  );
};
