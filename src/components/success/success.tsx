import { ReactNode } from 'react';

import { CloseSuccessIcon, SuccessIcon } from '../../assets';
import { clearBookingSuccess, clearBookOccupied, getBookDetails, getBooking } from '../../store';
import { clearSendReview } from '../../store/features/book-details-slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import { ButtonClose, Container, StyledSuccess, Text } from './styles';

interface IProps {
  children: ReactNode;
}

export const Success = ({ children }: IProps) => {
  const dispatch = useAppDispatch();
  const { bookOccupied, successBooking } = useAppSelector(getBooking);
  const { isSendReview } = useAppSelector(getBookDetails);

  const handleOpen = () => {
    if (successBooking) {
      dispatch(clearBookingSuccess());
      if (bookOccupied) {
        dispatch(clearBookOccupied());
      }
    }
    if (isSendReview) {
      dispatch(clearSendReview());
    }
  };

  return (
    <StyledSuccess>
      <Container data-test-id='error'>
        <SuccessIcon />
        <Text> {children}</Text>
        <ButtonClose type='button' onClick={handleOpen} data-test-id='alert-close'>
          <CloseSuccessIcon />
        </ButtonClose>
      </Container>
    </StyledSuccess>
  );
};
