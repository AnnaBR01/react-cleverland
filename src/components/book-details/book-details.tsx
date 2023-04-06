/* eslint-disable no-negated-condition */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { NoImageIcon } from '../../assets';
import { useWindowSize } from '../../hooks';
import { addBookOccupied, getBookDetails, getUserInfo, useAppDispatch, useAppSelector } from '../../store';
import { Breakpoint, Title } from '../../ui';
import { setDateFormatForButton } from '../../utils';
import { ButtonOccupied, ButtonOccupiedUntil, PrimaryButton, SliderDesktop, SliderTablet } from '..';

import {
  Author,
  Description,
  Image,
  NoImage,
  StyledBookDetails,
  TitleDescription,
  WrapperContent,
  WrapperDekstopDescription,
  WrapperImage,
  WrapperTabletDescription,
  WrapperText,
} from './styles';

interface IProps {
  openModal: () => void;
}

export const BookDetails = ({ openModal }: IProps) => {
  const dispatch = useAppDispatch();
  const { width = 0 } = useWindowSize();
  const { book } = useAppSelector(getBookDetails);
  const { images, title, authors, issueYear, booking, delivery } = book;
  const { user } = useAppSelector(getUserInfo);

  const handleModalOccupied = () => {
    if (booking && booking.dateOrder) {
      dispatch(addBookOccupied({ id: booking?.id, createdAt: booking.dateOrder }));
      openModal();
    }
  };

  return (
    <React.Fragment>
      <StyledBookDetails>
        <WrapperImage>
          {images === null && (
            <NoImage>
              <NoImageIcon />
            </NoImage>
          )}

          {images !== null && images.length === 1 && (
            <Image src={`https://strapi.cleverland.by${images[0].url}`} alt={title} />
          )}

          {images !== null &&
            images.length > 1 &&
            (width >= Breakpoint.MD ? (
              <SliderDesktop image={images} title={title} />
            ) : (
              <SliderTablet image={images} title={title} />
            ))}
        </WrapperImage>

        <WrapperContent>
          <Title data-test-id='book-title'>{title}</Title>

          <Author>
            {authors !== null && authors.map((author) => <WrapperText key={uuidv4()}>{author}, </WrapperText>)}
            {issueYear && <WrapperText>{issueYear}</WrapperText>}
          </Author>

          {!booking ? (
            delivery && delivery.dateHandedTo ? (
              <ButtonOccupiedUntil
                large={350}
                middle={306}
                small={288}
                padding={14}
                fontSize={16}
                isBig={false}
                dataTestId='booking-button'
              >
                {`Занята до ${setDateFormatForButton(delivery.dateHandedTo)}`}
              </ButtonOccupiedUntil>
            ) : (
              <PrimaryButton
                large={350}
                middle={306}
                small={288}
                padding={14}
                fontSize={16}
                isBig={false}
                onClick={openModal}
                dataTestId='booking-button'
              >
                Забронировать
              </PrimaryButton>
            )
          ) : booking.customerId === user.id ? (
            <ButtonOccupied
              large={350}
              middle={306}
              small={288}
              padding={14}
              fontSize={16}
              isBig={false}
              dataTestId='booking-button'
              onClick={handleModalOccupied}
            >
              Забронирована
            </ButtonOccupied>
          ) : (
            <ButtonOccupiedUntil
              large={350}
              middle={306}
              small={288}
              padding={14}
              fontSize={16}
              isBig={false}
              dataTestId='booking-button'
            >
              Забронирована
            </ButtonOccupiedUntil>
          )}

          {width > Breakpoint.MD && (
            <WrapperDekstopDescription>
              <TitleDescription>О книге</TitleDescription>
              <Description>
                Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то
                решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута,
                изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое
                время? Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А
                грокать алгоритмы — это веселое и увлекательное занятие.
              </Description>
            </WrapperDekstopDescription>
          )}
        </WrapperContent>
      </StyledBookDetails>

      {width < Breakpoint.MD && (
        <WrapperTabletDescription>
          <TitleDescription>О книге</TitleDescription>
          <Description>
            Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то
            решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута,
            изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое
            время? Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать
            алгоритмы — это веселое и увлекательное занятие.
          </Description>
        </WrapperTabletDescription>
      )}
    </React.Fragment>
  );
};
