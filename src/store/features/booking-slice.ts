/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { cleverlandAPI } from '../../services/cleverland-api';
import { IBookingRequest, IBookingResponse, IEditBookingRequest } from '../../types/types';

interface BookingState {
  isLoadingBooking: boolean;

  bookingId: number | null;
  bookIdForBooking: null | number;
  bookOccupied: { id: number; createdAt: string } | null;
  cancelBookingId: number | null;

  successBooking: null | string;
  errorBooking: null | string;
}

const initialState: BookingState = {
  isLoadingBooking: false,

  bookingId: null,
  bookIdForBooking: null,
  bookOccupied: null,
  cancelBookingId: null,

  successBooking: null,
  errorBooking: null,
};

const fetchBooking = createAsyncThunk<IBookingResponse, IBookingRequest, { rejectValue: string }>(
  'booking/fetchBooking',
  async (body, { rejectWithValue }) => {
    try {
      return await cleverlandAPI.reserveBook(body);
    } catch (error) {
      const axiosError = error as AxiosError;

      return rejectWithValue(axiosError.message);
    }
  }
);

const fetchCancelBooking = createAsyncThunk<IBookingResponse, number, { rejectValue: string }>(
  'booking/fetchCancelBooking',
  async (id, { rejectWithValue }) => {
    try {
      return await cleverlandAPI.cancelBooking(id);
    } catch (error) {
      const axiosError = error as AxiosError;

      return rejectWithValue(axiosError.message);
    }
  }
);

const fetchEditBooking = createAsyncThunk<IBookingResponse, IEditBookingRequest, { rejectValue: string }>(
  'booking/fetchEditBooking',
  async ({ id, body }, { rejectWithValue }) => {
    try {
      return await cleverlandAPI.editBook({ id, body });
    } catch (error) {
      const axiosError = error as AxiosError;

      return rejectWithValue(axiosError.message);
    }
  }
);

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    clearBookingError(state) {
      state.errorBooking = null;
    },
    clearBookingSuccess(state) {
      state.successBooking = null;
    },
    addBookIdForBooking(state, { payload }: PayloadAction<number>) {
      state.bookIdForBooking = payload;
    },
    clearBookIdForBooking(state) {
      state.bookIdForBooking = null;
    },
    addBookOccupied(state, { payload }: PayloadAction<{ id: number; createdAt: string }>) {
      state.bookOccupied = payload;
    },
    clearBookOccupied(state) {
      state.bookOccupied = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchBooking.pending, (state) => {
      state.successBooking = null;
      state.isLoadingBooking = true;
      state.errorBooking = null;
    });
    builder.addCase(fetchBooking.fulfilled, (state, { payload }) => {
      state.isLoadingBooking = false;
      state.bookingId = payload.id;
      state.successBooking = 'Книга забронирована. Подробности можно посмотреть на странице Профиль';
    });
    builder.addCase(fetchBooking.rejected, (state) => {
      state.isLoadingBooking = false;
      state.errorBooking = 'Что-то пошло не так, книга не забронирована. Попробуйте позже!';
      state.successBooking = null;
    });

    builder.addCase(fetchCancelBooking.pending, (state) => {
      state.successBooking = null;
      state.isLoadingBooking = true;
      state.errorBooking = null;
    });
    builder.addCase(fetchCancelBooking.fulfilled, (state, { payload }) => {
      state.isLoadingBooking = false;
      state.bookOccupied = null;
      state.successBooking = 'Бронирование книги успешно отменено!';
      state.cancelBookingId = payload.id;
    });
    builder.addCase(fetchCancelBooking.rejected, (state) => {
      state.isLoadingBooking = false;
      state.errorBooking = 'Не удалось снять бронирование книги. Попробуйте позже!';
      state.successBooking = null;
    });

    builder.addCase(fetchEditBooking.pending, (state) => {
      state.successBooking = null;
      state.isLoadingBooking = true;
      state.errorBooking = null;
    });
    builder.addCase(fetchEditBooking.fulfilled, (state, { payload }) => {
      state.isLoadingBooking = false;
      state.bookingId = payload.id;
      state.successBooking = 'Изменения успешно сохранены!';
    });
    builder.addCase(fetchEditBooking.rejected, (state) => {
      state.isLoadingBooking = false;
      state.errorBooking = 'Изменения не были сохранены. Попробуйте позже!';
      state.successBooking = null;
    });
  },
});

// eslint-disable-next-line import/no-default-export
export default bookingSlice.reducer;

export { fetchBooking, fetchCancelBooking, fetchEditBooking };

export const {
  clearBookingError,
  addBookIdForBooking,
  clearBookIdForBooking,
  addBookOccupied,
  clearBookOccupied,
  clearBookingSuccess,
} = bookingSlice.actions;
