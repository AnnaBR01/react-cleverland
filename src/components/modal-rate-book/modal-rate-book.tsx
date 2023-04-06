import React, { useState } from 'react';

import { CrossMarkIcon } from '../../assets';
import { useWindowSize } from '../../hooks';
import { fetchReview, getBookDetails, getUserInfo, useAppDispatch, useAppSelector } from '../../store';
import { Breakpoint } from '../../ui';
import { DinamicStars, PrimaryButton } from '..';

import { CloseButton, RatingWrapper, ReviewText, SubTitle, Title } from './styles';

interface IProps {
  closeModal: () => void;
}

export const ModalRateBook = ({ closeModal }: IProps) => {
  const dispatch = useAppDispatch();
  const { book } = useAppSelector(getBookDetails);
  const { user } = useAppSelector(getUserInfo);
  const { width = 0 } = useWindowSize();
  const [reviewText, setReview] = useState('');
  const [rating, setRating] = useState(0);

  const handleReview = () => {
    dispatch(
      fetchReview({
        data: {
          rating,
          text: reviewText,
          book: String(book.id),
          user: String(user.id),
        },
      })
    ).finally(() => {
      closeModal();
    });
  };

  return (
    <React.Fragment>
      <Title data-test-id='modal-title'>Оцените книгу</Title>
      <CloseButton onClick={closeModal} data-test-id='modal-close-button'>
        <CrossMarkIcon width={width < Breakpoint.SM ? 16 : 24} height={width < Breakpoint.SM ? 16 : 24} />
      </CloseButton>
      <RatingWrapper>
        <SubTitle>Ваша оценка</SubTitle>
        <DinamicStars rating={rating} setRating={setRating} />
      </RatingWrapper>

      <ReviewText
        rows={4.5}
        placeholder='Оставить отзыв'
        value={reviewText}
        onChange={(e) => {
          setReview(e.target.value);
        }}
        data-test-id='comment'
      />

      <PrimaryButton allWidth={true} fontSize={16} isBig={true} dataTestId='button-comment' onClick={handleReview}>
        оценить
      </PrimaryButton>
    </React.Fragment>
  );
};
