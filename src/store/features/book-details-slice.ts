/* eslint-disable no-param-reassign */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { cleverlandAPI } from '../../services/cleverland-api';
import { IBookDetails, ISendReviewRequest, ISendReviewResponse } from '../../types/types';

interface BookDetailsState {
  book: IBookDetails;
  isLoadingBookDetails: boolean;
  errorBookDetails: null | string;
  isSendReview: boolean;
  sendReviewId: number | null;
  isLoadingSendReview: boolean;
  errorSendReview: null | string;
}

const initialState: BookDetailsState = {
  book: {
    id: 0,
    title: '',
    rating: null,
    issueYear: '',
    description: '',
    publish: '',
    pages: '',
    cover: '',
    weight: '',
    format: '',
    ISBN: '',
    producer: '',
    authors: [''],
    images: null,
    categories: [''],
    comments: [
      {
        id: 0,
        rating: 0,
        text: '',
        createdAt: '',
        user: {
          commentUserId: 0,
          firstName: '',
          lastName: '',
          avatarUrl: '',
        },
      },
    ],

    booking: null,
    delivery: null,
    histories: null,
  },
  isLoadingBookDetails: false,
  errorBookDetails: null,
  isSendReview: false,
  sendReviewId: null,
  isLoadingSendReview: false,
  errorSendReview: null,
};

const fetchBookDetails = createAsyncThunk<IBookDetails, string, { rejectValue: string }>(
  'books/fetchBookDetails',
  async (id, { rejectWithValue }) => {
    try {
      return await cleverlandAPI.getDetailsById(id);
    } catch (error) {
      const axiosError = error as AxiosError;

      return rejectWithValue(axiosError.message);
    }
  }
);

const fetchReview = createAsyncThunk<ISendReviewResponse, ISendReviewRequest, { rejectValue: string }>(
  'books/fetchReview',
  async (body, { rejectWithValue }) => {
    try {
      return await cleverlandAPI.sendReview(body);
    } catch (error) {
      const axiosError = error as AxiosError;

      return rejectWithValue(axiosError.message);
    }
  }
);

const bookDetailsSlice = createSlice({
  name: 'bookDetails',
  initialState,
  reducers: {
    clearReviewError(state) {
      state.errorSendReview = null;
    },
    clearSendReview(state) {
      state.isSendReview = false;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchBookDetails.pending, (state) => {
      state.isLoadingBookDetails = true;
      state.errorBookDetails = null;
    });
    builder.addCase(fetchBookDetails.fulfilled, (state, { payload }) => {
      state.isLoadingBookDetails = false;
      state.book = payload;
    });
    builder.addCase(fetchBookDetails.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoadingBookDetails = false;
        state.errorBookDetails = payload;
      }
    });

    builder.addCase(fetchReview.pending, (state) => {
      state.isSendReview = false;
      state.isLoadingSendReview = true;
      state.errorBookDetails = null;
    });
    builder.addCase(fetchReview.fulfilled, (state, { payload }) => {
      state.isLoadingSendReview = false;
      state.sendReviewId = payload.id;
      state.isSendReview = true;
    });
    builder.addCase(fetchReview.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoadingSendReview = false;
        state.errorSendReview = payload;
        state.isSendReview = false;
      }
    });
  },
});

// eslint-disable-next-line import/no-default-export
export default bookDetailsSlice.reducer;

export { fetchBookDetails, fetchReview };

export const { clearReviewError, clearSendReview } = bookDetailsSlice.actions;
