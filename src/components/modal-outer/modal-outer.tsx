import { ReactNode, useRef } from 'react';

import { useOnClickOutside } from '../../hooks';
import { clearBookOccupied, getBooking, useAppDispatch, useAppSelector } from '../../store';

import { StyledModal, StyledModalOuter } from './styles';

interface IProps {
  children: ReactNode;
  closeModal: () => void;
  dataTestId: string;
}

export const ModalOuter = ({ children, closeModal, dataTestId }: IProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const { bookOccupied } = useAppSelector(getBooking);

  useOnClickOutside(ref, () => {
    closeModal();
    if (bookOccupied?.id) {
      dispatch(clearBookOccupied());
    }
  });

  return (
    <StyledModalOuter data-test-id='modal-outer'>
      <StyledModal ref={ref} data-test-id={dataTestId}>
        {children}
      </StyledModal>
    </StyledModalOuter>
  );
};
