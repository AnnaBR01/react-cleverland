import styled from 'styled-components';

import { Color, ContainerFlexColumn, H3, H4, Media, SUBTITLE_LARGE } from '../../ui';

const Title = styled.h6`
  ${H4}

  ${Media.SM} {
    ${H3}
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 32px;
  right: 32px;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${Color.GrayType5};
  border-radius: 50%;

  ${Media.SM} {
    width: 32px;
    height: 32px;
    top: 16px;
    right: 16px;
  }
`;

const RatingWrapper = styled(ContainerFlexColumn)`
  align-items: center;
  grid-gap: 16px;
`;

const SubTitle = styled.h6`
  ${SUBTITLE_LARGE}
`;

const ReviewText = styled.textarea`
  width: 416px;
  padding: 19px 12px;
  margin-bottom: 20px;
  color: ${Color.GrayType2};
  background: ${Color.GrayType5};
  border-radius: 4px;
  border: none;
  resize: none;
  outline: none;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.1px;

  ${Media.SM} {
    width: 100%;
  }
`;

export { Title, RatingWrapper, SubTitle, ReviewText, CloseButton };
