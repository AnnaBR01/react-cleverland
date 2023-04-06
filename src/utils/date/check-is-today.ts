import { checkDateIsEqual } from '..';

export const checkIsToday = (date: Date) => {
  const today = new Date();

  return checkDateIsEqual(today, date);
};
