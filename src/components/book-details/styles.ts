import styled from 'styled-components';

import { Color, ContainerFlexRowCenter, H5, Media, SecondarySmallTitle, Text } from '../../ui';

const StyledBookDetails = styled.div`
  display: flex;
  grid-gap: 30px;
  margin-top: 86px;

  ${Media.MD} {
    position: relative;
    grid-gap: 32px;
    margin-top: 128px;
  }

  ${Media.SM} {
    flex-direction: column;
    grid-gap: 16px;
    margin-top: 109px;
  }
`;

const WrapperImage = styled.div`
  align-self: center;

  ${Media.SM} {
    margin-bottom: 16px;
  }
`;

const Image = styled.img`
  width: 445px;
  height: 593px;
  object-fit: contain;
  border: 1px solid ${Color.GrayType2};
  border-radius: 10px;

  ${Media.MD} {
    width: 136px;
    height: 198px;
    border-radius: 3px;
  }

  ${Media.SM} {
    width: 188px;
    height: 260px;
    border-radius: 10px;
  }
`;

const NoImage = styled(ContainerFlexRowCenter)`
  width: 445px;
  height: 593px;
  border: 1px solid ${Color.GrayType2};
  border-radius: 10px;

  ${Media.MD} {
    width: 136px;
    height: 198px;
    border-radius: 3px;
  }

  ${Media.SM} {
    width: 188px;
    height: 260px;
    border-radius: 10px;
  }
`;

const WrapperContent = styled.div``;

const Author = styled.h3`
  margin-top: 24px;
  margin-bottom: 32px;
  color: ${Color.GrayType2};
  ${H5}

  ${Media.MD} {
    margin-block: 32px;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
  }

  ${Media.SM} {
    margin-top: 8px;
    margin-bottom: 42px;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
  }
`;

const WrapperText = styled.span``;

const TitleDescription = styled(SecondarySmallTitle)`
  margin-bottom: 32px;

  ${Media.SM} {
    margin-bottom: 16px;
  }
`;

const Description = styled(Text)`
  ${Media.SM} {
    font-size: 12px;
    line-height: 18px;
  }
`;

const WrapperDekstopDescription = styled.div`
  margin-top: 62px;

  ${Media.MD} {
    display: none;
  }
`;

const WrapperTabletDescription = styled.div`
  display: none;

  ${Media.MD} {
    display: block;
    margin-top: 48px;
  }

  ${Media.SM} {
    margin-top: 42px;
  }
`;

export {
  StyledBookDetails,
  WrapperImage,
  Image,
  NoImage,
  WrapperContent,
  Author,
  WrapperText,
  TitleDescription,
  Description,
  WrapperDekstopDescription,
  WrapperTabletDescription,
};
