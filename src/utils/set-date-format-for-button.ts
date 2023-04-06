import { createDate } from '.';

export const setDateFormatForButton = (dateHandetTo: string) => {
  const day = createDate({ date: new Date(dateHandetTo) }).dayNumber;
  const month = (createDate({ date: new Date(dateHandetTo) }).monthIndex + 1).toString().padStart(2, '0');

  return `${day}.${month}`;
};
