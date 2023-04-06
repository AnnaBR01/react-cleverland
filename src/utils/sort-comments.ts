import { IComments } from '../types/types';

export const sortComments = (comments: IComments) => {
  const commensArray = [...comments];

  return commensArray.sort((a, b) => {
    const date1 = new Date(a.createdAt);
    const date2 = new Date(b.createdAt);

    return Number(date2) - Number(date1);
  });
};
