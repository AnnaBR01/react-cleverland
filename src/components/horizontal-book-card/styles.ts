import styled from 'styled-components';

import { Color, ContainerFlexBeetween, ContainerFlexColumn, ContainerFlexRowCenter, Media } from '../../ui';

const StyledHorizontalBookCard = styled.div`
  display: flex;
  padding: 24px 24px 24px 16px;
  box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18),
    0px 1px 5px rgba(191, 196, 201, 0.24);
  border-radius: 12px;

  ${Media.MD} {
    padding: 24px 24px 16px 16px;
  }

  ${Media.SM} {
    padding: 16px 16px 16px 8px;
  }
`;

const WrapperImage = styled.div`
  margin-right: 16px;

  ${Media.SM} {
    margin-right: 8px;
  }
`;

const Image = styled.img`
  width: 120px;
  height: 170px;
  object-fit: contain;
  border: 1px solid ${Color.GrayType2};
  border-radius: 3px;

  ${Media.MD} {
    width: 120px;
    height: 172px;
  }

  ${Media.SM} {
    width: 70px;
    height: 100px;
  }
`;

const NoImage = styled(ContainerFlexRowCenter)`
  width: 120px;
  height: 170px;
  background: ${Color.GrayType5};
  border: 1px solid ${Color.GrayType2};
  border-radius: 3px;

  ${Media.MD} {
    width: 120px;
    height: 172px;
  }

  ${Media.SM} {
    width: 70px;
    height: 100px;
  }
`;

const WrapperContent = styled(ContainerFlexColumn)`
  width: 100%;
  ${Media.SM} {
  }
`;

const Title = styled.h2`
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 22px;
  line-height: 32px;
  color: ${Color.Dark};

  ${Media.MD} {
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 0.1px;
  }

  ${Media.SM} {
    margin-bottom: 3px;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
  }
`;

const WrapperText = styled.h3`
  margin-bottom: 24px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: ${Color.GrayType1};

  ${Media.MD} {
    margin-bottom: 16px;
  }

  ${Media.SM} {
    margin-bottom: 3px;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
  }
`;

const Text = styled.span``;

const WrapperRow = styled(ContainerFlexBeetween)`
  ${Media.SM} {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    grid-gap: 16px;
  }
`;

export { StyledHorizontalBookCard, WrapperImage, Image, NoImage, WrapperContent, Title, WrapperText, Text, WrapperRow };
