import axios from 'axios';

import {
  IAuthUsrerRequest,
  IBook,
  IBookDetails,
  IBookingRequest,
  ICategory,
  IEditBookingRequest,
  IForgotPasswordRequest,
  IRegistrationUsrerRequest,
  IResetPasswordRequest,
  ISendReviewRequest,
} from '../types/types';

enum Endpoint {
  BOOKS = 'books',
  CATEGORIES = 'categories',
  BOOK = 'books/',
  REGISTRATION = 'auth/local/register',
  AUTH = 'auth/local',
  FORGOT_PASSWORD = 'auth/forgot-password',
  RESET_PASSWORD = 'auth/reset-password',
  SEND_REVIEW = 'comments',
  RESERVE = 'bookings',
  CANCEL = 'bookings/',
}

class CleverlandAPI {
  private readonly API = axios.create({
    baseURL: 'https://strapi.cleverland.by/api/',
  });

  public async getBooks() {
    const { data } = await this.API.get<IBook[]>(Endpoint.BOOKS, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    return data;
  }

  public async getCategories() {
    const { data } = await this.API.get<ICategory[]>(Endpoint.CATEGORIES, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    return data;
  }

  public async getDetailsById(id: string) {
    const { data } = await this.API.get<IBookDetails>(`${Endpoint.BOOK}${id}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    return data;
  }

  public async registrationUser(body: IRegistrationUsrerRequest) {
    const { data } = await this.API.post(Endpoint.REGISTRATION, body);

    return data;
  }

  public async authUser(body: IAuthUsrerRequest) {
    const { data } = await this.API.post(Endpoint.AUTH, body);

    return data;
  }

  public async forgotPassword(body: IForgotPasswordRequest) {
    const { data } = await this.API.post(Endpoint.FORGOT_PASSWORD, body);

    return data;
  }

  public async resetPassword(body: IResetPasswordRequest) {
    const { data } = await this.API.post(Endpoint.RESET_PASSWORD, body);

    return data;
  }

  public async sendReview(body: ISendReviewRequest) {
    const { data } = await this.API.post(Endpoint.SEND_REVIEW, body, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    return data;
  }

  public async reserveBook(body: IBookingRequest) {
    const { data } = await this.API.post(Endpoint.RESERVE, body, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    return data;
  }

  public async cancelBooking(id: number) {
    const { data } = await this.API.delete(`${Endpoint.CANCEL}${id}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    return data;
  }

  public async editBook({ id, body }: IEditBookingRequest) {
    const { data } = await this.API.put(`${Endpoint.CANCEL}${id}`, body, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    return data;
  }
}

export const cleverlandAPI = new CleverlandAPI();
