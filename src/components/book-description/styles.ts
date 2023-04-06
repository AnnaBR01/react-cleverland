import styled from 'styled-components';

import {
  Color,
  ContainerFlex,
  ContainerFlexColumn,
  Media,
  SecondarySmallTitle,
  TEXT_CONTENT_LARGE,
  TEXT_CONTENT_SMALL,
} from '../../ui';

const StyledBookDescription = styled(ContainerFlexColumn)`
  grid-gap: 62px;
  margin-top: 42px;

  ${Media.MD} {
    grid-gap: 52px;
    margin-top: 52px;
  }

  ${Media.SM} {
    grid-gap: 42px;
    margin-top: 42px;
  }
`;

const Rating = styled(ContainerFlexColumn)``;

const RatingRow = styled(ContainerFlex)``;

const NumberRating = styled(SecondarySmallTitle)`
  margin-left: 24px;
`;

const NoRatingRow = styled(ContainerFlex)`
  ${Media.SM} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const RatingText = styled.p`
  margin-left: 24px;

  ${Media.SM} {
    margin-left: 0;
    margin-top: 8px;
  }
`;

const Description = styled(ContainerFlexColumn)``;

const WrapperDescription = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 146px;

  ${Media.MD} {
    grid-gap: 30px;
  }

  ${Media.SM} {
    grid-template-columns: 100%;
    grid-gap: 16px;
  }
`;

const DescriptionContainer = styled(ContainerFlexColumn)`
  justify-content: space-between;
  grid-gap: 16px;
`;

const DescriptionRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const InfoTitle = styled.p`
  ${TEXT_CONTENT_LARGE}
  color: ${Color.GrayType2};
`;

const Info = styled.p`
  ${TEXT_CONTENT_SMALL}
`;

export {
  StyledBookDescription,
  Rating,
  RatingRow,
  NumberRating,
  NoRatingRow,
  RatingText,
  Description,
  WrapperDescription,
  DescriptionContainer,
  DescriptionRow,
  InfoTitle,
  Info,
};
