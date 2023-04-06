import { v4 as uuidv4 } from 'uuid';

import { DatePickerIcon, IconArrowDown, IconArrowUp } from '../../assets';
import { useCalendar } from '../../hooks';
import { getBooking, useAppSelector } from '../../store';
import { checkDateIsEqual, checkIsToday, createDate } from '../../utils';

import {
  Button,
  ChangingDate,
  CurrentMounth,
  Day,
  DayOfTheWeek,
  Days,
  DaysOfTheWeek,
  Header,
  Mounth,
  Mounths,
  NameMounth,
  PickerDateWrapper,
  StyledCalendar,
} from './styles';

interface IProps {
  locale?: string;
  selectedDate: Date;
  selectDate: (date: Date) => void;
  firstWeekDayNumber?: number;
  setDateReserve: (date: Date) => void;
  dateReserve: Date | null;
}

export const Calendar = ({
  locale = 'default',
  selectedDate: date,
  selectDate,
  firstWeekDayNumber = 2,
  dateReserve,
  setDateReserve,
}: IProps) => {
  const { bookOccupied } = useAppSelector(getBooking);

  const { functions, state } = useCalendar({
    locale,
    selectedDate: date,
    firstWeekDayNumber,
  });

  const checkActiveDay = (dDayNumber: number, dYear: number, dMonthIndex: number) => {
    const { dayNumber, dayNumberInWeek, monthIndex, year } = createDate();

    if (year === dYear && monthIndex === dMonthIndex) {
      if (dayNumberInWeek === 6 && dDayNumber === dayNumber + 3) return true;
      if (dayNumberInWeek === 7 && dDayNumber === dayNumber + 2) return true;

      return dayNumberInWeek <= 5 && dDayNumber === dayNumber + 1
        ? true
        : dayNumberInWeek === 1 && dDayNumber === dayNumber + 1
        ? true
        : false;
    }

    return false;
  };

  const handleSelectedDate = (value: Date) => {
    selectDate(value);

    setDateReserve(value);
  };

  return (
    <StyledCalendar data-test-id='calendar'>
      <Header>
        <CurrentMounth
          data-test-id='month-select'
          onClick={() => {
            functions.setMode('monthes');
          }}
        >
          <NameMounth>
            {state.monthesNames[state.selectedMonth.monthIndex].month} {state.selectedYear}
          </NameMounth>
          <Button>
            <DatePickerIcon />
          </Button>
        </CurrentMounth>
        <ChangingDate>
          <Button data-test-id='button-prev-month' onClick={() => functions.onClickArrow('up')}>
            <IconArrowUp />
          </Button>
          <Button data-test-id='button-next-month' onClick={() => functions.onClickArrow('down')}>
            <IconArrowDown />
          </Button>
        </ChangingDate>
      </Header>
      {state.mode === 'monthes' && (
        <Mounths>
          {state.monthesNames.map((m) => (
            <Mounth
              onClick={() => {
                functions.setSelectedMonthByIndex(m.monthIndex);
                functions.setMode('days');
              }}
              key={uuidv4()}
            >
              {m.monthShort}
            </Mounth>
          ))}
        </Mounths>
      )}

      {state.mode === 'days' && (
        <PickerDateWrapper>
          <DaysOfTheWeek>
            {state.weekDaysNames.map((d) => (
              <DayOfTheWeek key={uuidv4()}>{d.dayShort}</DayOfTheWeek>
            ))}
          </DaysOfTheWeek>
          <Days>
            {state.calendarDays.map((d) => {
              const isToday = checkIsToday(d.date);
              const isDayOrder =
                checkDateIsEqual(d.date, dateReserve) ||
                (!!bookOccupied && checkDateIsEqual(d.date, new Date(bookOccupied?.createdAt)) && !dateReserve);
              const isWeekend = d.dayNumberInWeek === 7 || d.dayNumberInWeek === 1;
              const isActiveDay =
                checkActiveDay(d.dayNumber, d.year, d.monthIndex) ||
                (isToday && d.dayNumberInWeek !== 7 && d.dayNumberInWeek !== 1);

              return (
                <Day
                  key={uuidv4()}
                  data-test-id='day-button'
                  $isToday={isToday}
                  $isDayOrder={isDayOrder}
                  $isWeekend={isWeekend}
                  $isActiveDay={isActiveDay}
                  onClick={() => {
                    handleSelectedDate(d.date);
                  }}
                  disabled={!isActiveDay}
                >
                  {d.dayNumber}
                </Day>
              );
            })}
          </Days>
        </PickerDateWrapper>
      )}
    </StyledCalendar>
  );
};
