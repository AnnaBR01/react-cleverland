/* eslint-disable no-param-reassign */
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { StarIcon } from '../../assets';
import { useWindowSize } from '../../hooks';
import { Breakpoint } from '../../ui';

import { ButtonStar, StyledDinamicStars } from './styles';

interface IProps {
  rating: number;
  setRating: (arg0: number) => void;
}

export const DinamicStars = ({ rating, setRating }: IProps) => {
  const [hover, setHover] = useState(0);
  const { width = 0 } = useWindowSize();

  return (
    <StyledDinamicStars data-test-id='rating'>
      {[...Array(5)].map((star, index) => {
        index += 1;

        return (
          <ButtonStar
            type='button'
            key={uuidv4()}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
            data-test-id='star'
          >
            <StarIcon
              key={uuidv4()}
              data-test-id={index <= rating && 'star-active'}
              height={width < Breakpoint.SM ? '26' : '33'}
              width={width < Breakpoint.SM ? '25' : '35'}
              fill={index <= (hover || rating) ? '#FFBC1F' : 'none'}
            />
          </ButtonStar>
        );
      })}
    </StyledDinamicStars>
  );
};
