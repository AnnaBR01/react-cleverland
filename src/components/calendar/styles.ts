import styled from 'styled-components';

import {
  Color,
  ContainerFlexBeetween,
  ContainerFlexColumnCenter,
  ContainerFlexRowCenter,
  INFO_LARGE,
  INFO_SMALL,
} from '../../ui';

const StyledCalendar = styled(ContainerFlexColumnCenter)`
  grid-gap: 8px;
  padding: 16px 16px 0 16px;
  box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18),
    0px 1px 5px rgba(191, 196, 201, 0.24);
  border-radius: 8px;
`;

const Header = styled(ContainerFlexBeetween)`
  width: 100%;
  padding-left: 9px;
`;

const CurrentMounth = styled(ContainerFlexBeetween)`
  cursor: pointer;
`;

const ChangingDate = styled(ContainerFlexBeetween)`
  grid-gap: 12px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NameMounth = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: ${Color.GrayType2};
  text-transform: capitalize;
`;

const PickerDateWrapper = styled(ContainerFlexColumnCenter)``;

const DaysOfTheWeek = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 32px);
  grid-template-rows: 32px 1fr;
`;

const DayOfTheWeek = styled(ContainerFlexRowCenter)`
  ${INFO_LARGE}
  background: ${Color.ButtonHover};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  text-transform: capitalize;
`;

const Days = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 32px);
  grid-auto-rows: 32px;
`;

const Day = styled.button<{ $isToday: boolean; $isDayOrder: boolean; $isWeekend: boolean; $isActiveDay: boolean }>`
  ${INFO_SMALL}
  color: ${({ $isToday, $isDayOrder, $isWeekend, $isActiveDay }) =>
    $isToday && !$isDayOrder
      ? 'rgb(248, 54, 0)'
      : $isDayOrder
      ? Color.White
      : $isActiveDay
      ? Color.Dark
      : Color.GrayType2};
  background: ${({ $isDayOrder, $isWeekend }) =>
    $isDayOrder ? Color.ButtonHover : $isWeekend ? Color.NegativeBackground : 'none'};
  border-radius: 16px;

  &:hover {
    border: ${({ $isActiveDay }) => ($isActiveDay ? `1px solid ${Color.GrayType3}` : 'none')};
  }
`;

const Mounths = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 52px);
  grid-auto-rows: 52px;
`;

const Mounth = styled.button`
  ${INFO_LARGE}
  text-transform: capitalize;
  color: ${Color.GrayType2};

  &:hover {
    color: ${Color.Dark};
  }
`;

export {
  StyledCalendar,
  Header,
  CurrentMounth,
  ChangingDate,
  Button,
  NameMounth,
  PickerDateWrapper,
  DaysOfTheWeek,
  DayOfTheWeek,
  Days,
  Day,
  Mounths,
  Mounth,
};
