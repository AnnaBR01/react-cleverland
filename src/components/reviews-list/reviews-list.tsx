import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { ChevronDownIcon, ChevronUpIcon } from '../../assets';
import reviewerAvatarIcon from '../../assets/images/reviewer-avatar.png';
import { useToggle, useWindowSize } from '../../hooks';
import { getBookDetails, getUserInfo, useAppSelector } from '../../store';
import { Breakpoint, SmallTitle } from '../../ui';
import { checkReviewsFromCurrentUser, sortComments } from '../../utils';
import { Loader, ModalOuter, ModalRateBook, PrimaryButton, Separator, Stars } from '..';

import {
  Box,
  ButtonArrow,
  Content,
  Info,
  InfoText,
  Review,
  ReviewsAmount,
  Text,
  TitleBox,
  Wrapper,
  WrapperReviews,
} from './styles';

export const ReviewsList = () => {
  const { user } = useAppSelector(getUserInfo);
  const { book, isLoadingSendReview } = useAppSelector(getBookDetails);
  const { comments } = book;
  const [isOpenReviews, toggleIsOpenReviews] = useToggle(true);
  const [isOpenModalRate, toggleIsOpenModalRate] = useState(false);
  const { width = 0 } = useWindowSize();

  return (
    <Wrapper>
      <TitleBox $open={isOpenReviews}>
        <WrapperReviews>
          <SmallTitle>
            Отзывы{comments ? <ReviewsAmount>{comments.length}</ReviewsAmount> : <ReviewsAmount>0</ReviewsAmount>}
          </SmallTitle>
          {comments && (
            <ButtonArrow type='button' onClick={toggleIsOpenReviews} data-test-id='button-hide-reviews'>
              {isOpenReviews ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </ButtonArrow>
          )}
        </WrapperReviews>
      </TitleBox>

      {isOpenReviews && <Separator />}

      <Content data-test-id='reviews'>
        {comments && isOpenReviews && (
          <React.Fragment>
            {sortComments(comments).map(({ user, text, rating, createdAt }) => (
              <Review key={uuidv4()} data-test-id='comment-wrapper'>
                <Info>
                  <img
                    src={user.avatarUrl ? `https://strapi.cleverland.by${user.avatarUrl}` : reviewerAvatarIcon}
                    alt='avatar'
                  />

                  <Box>
                    <InfoText data-test-id='comment-author'>{`${user.firstName} ${user.lastName}`}</InfoText>
                    <InfoText data-test-id='comment-date'>
                      {new Date(createdAt)
                        .toLocaleDateString('ru-RU', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })
                        .slice(0, -3)}
                    </InfoText>
                  </Box>
                </Info>
                <Stars rating={rating} />
                <Text data-test-id='comment-text'>{text}</Text>
              </Review>
            ))}
          </React.Fragment>
        )}

        <PrimaryButton
          large={350}
          padding={14}
          fontSize={16}
          isBig={true}
          dataTestId='button-rate-book'
          onClick={() => toggleIsOpenModalRate(true)}
          disabled={user.id && comments ? checkReviewsFromCurrentUser(user.id, comments) : false}
        >
          Оценить книгу
        </PrimaryButton>
      </Content>

      {isOpenModalRate && (
        <ModalOuter
          closeModal={() => {
            toggleIsOpenModalRate(false);
          }}
          dataTestId='modal-rate-book'
        >
          <ModalRateBook
            closeModal={() => {
              toggleIsOpenModalRate(false);
            }}
          />
        </ModalOuter>
      )}

      {isLoadingSendReview &&
        (width < Breakpoint.SM ? <Loader size={42} /> : width < Breakpoint.MD ? <Loader size={64} /> : <Loader />)}
    </Wrapper>
  );
};
