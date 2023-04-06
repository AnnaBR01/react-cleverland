/* eslint-disable arrow-body-style */
import { IComments } from '../types/types';

export const checkReviewsFromCurrentUser = (userId: number, comments: IComments) => {
  let result = false;

  comments.forEach((comment) => {
    if (comment.user.commentUserId === userId) {
      result = true;
    }
  });

  return result;
};
