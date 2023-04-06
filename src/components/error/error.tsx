import { ReactNode } from 'react';

import { CloseErrorIcon, WarningIcon } from '../../assets';
import {
  clearBookingError,
  clearBookOccupied,
  clearReviewError,
  getBookDetails,
  getBooking,
  useAppDispatch,
  useAppSelector,
} from '../../store';

import { ButtonClose, Container, StyledError, Text } from './styles';

interface IProps {
  children: ReactNode;
}

export const Error = ({ children }: IProps) => {
  const dispatch = useAppDispatch();
  const { bookOccupied, errorBooking } = useAppSelector(getBooking);
  const { errorSendReview } = useAppSelector(getBookDetails);

  const handleOpen = () => {
    if (errorSendReview) {
      dispatch(clearReviewError());
    }

    if (errorBooking) {
      dispatch(clearBookingError());
      if (bookOccupied) {
        dispatch(clearBookOccupied());
      }
    }
  };

  return (
    <StyledError>
      <Container data-test-id='error'>
        <WarningIcon />
        <Text> {children}</Text>
        <ButtonClose type='button' onClick={handleOpen} data-test-id='alert-close'>
          <CloseErrorIcon />
        </ButtonClose>
      </Container>
    </StyledError>
  );
};
