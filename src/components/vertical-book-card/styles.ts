import styled from 'styled-components';

import { ContainerFlex, ContainerFlexColumn, ContainerFlexRowCenter, Media } from '../../ui';

const StyledVerticalBookCard = styled(ContainerFlexColumn)`
  padding: 8px 8px 16px;
  box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18),
    0px 1px 5px rgba(191, 196, 201, 0.24);
  border-radius: 10px;

  ${Media.SM} {
    max-width: 288px;
    padding: 8px 16px 16px;
  }
`;

const WrapperImage = styled.div`
  margin-bottom: 16px;

  ${Media.SM} {
    padding-inline: 41px;
    align-self: center;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 242px;
  object-fit: contain;
  border: 1px solid #a7a7a7;
  border-radius: 10px;

  ${Media.SM} {
    min-width: 174px;
  }
`;

const NoImage = styled(ContainerFlexRowCenter)`
  width: 100%;
  height: 242px;
  padding: 69px 44px;
  background: #f9f9fa;
  border: 1px solid #a7a7a7;
  border-radius: 10px;

  ${Media.SM} {
    min-width: 174px;
  }
`;

const WrapperTitle = styled(ContainerFlex)`
  height: 54px;
  margin-top: 16px;
  margin-bottom: 8px;

  ${Media.MD} {
    height: 36px;
    margin-bottom: 17px;
  }

  ${Media.SM} {
    height: 54px;
    margin-bottom: 8px;
  }
`;

const Title = styled.h2`
  color: #363636;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.1px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;

  ${Media.MD} {
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
    -webkit-line-clamp: 2;
    line-clamp: 2;
  }

  ${Media.SM} {
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    -webkit-line-clamp: 3;
    line-clamp: 3;
  }
`;

const SubTitle = styled(ContainerFlex)`
  height: 36px;
  margin-bottom: 28px;

  ${Media.MD} {
    height: 18px;
  }

  ${Media.SM} {
    height: auto;
  }
`;

const WrapperText = styled.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.1px;
  color: #727272;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;

  ${Media.MD} {
    font-weight: 700;
    font-size: 12px;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    text-transform: uppercase;
  }

  ${Media.SM} {
    font-weight: 400;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    text-transform: none;
  }
`;

const Text = styled.span``;

export { StyledVerticalBookCard, WrapperImage, Image, Title, WrapperTitle, SubTitle, Text, WrapperText, NoImage };
