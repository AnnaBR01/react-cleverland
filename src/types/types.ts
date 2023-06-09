// Boooks

export interface IBook {
  issueYear: string | null;
  rating: number | null;
  title: string;
  authors: string[] | null;
  image: {
    url: string;
  } | null;
  categories: string[] | null;
  id: number;
  booking: {
    id: number;
    order: boolean;
    dateOrder: string | null;
    customerId: number | null;
    customerFirstName: string | null;
    customerLastName: string | null;
  } | null;
  delivery: {
    id: number;
    handed: boolean;
    dateHandedFrom: string | null;
    dateHandedTo: string | null;
    recipientId: number | null;
    recipientFirstName: string | null;
    recipientLastName: string | null;
  } | null;
  histories:
    | [
        {
          id: number | null;
          userId: number | null;
        }
      ]
    | null;
}

export interface ICategory {
  name: string;
  path: string;
  id: number;
}

export interface IBookDetails {
  id: number;
  title: string;
  rating: number | null;
  issueYear: string | null;
  description: string | null;
  publish: string | null;
  pages: string | null;
  cover: string | null;
  weight: string | null;
  format: string | null;
  ISBN: string | null;
  producer: string | null;
  authors: string[] | null;
  images:
    | [
        {
          url: string;
        }
      ]
    | null;

  categories: string[] | null;
  comments:
    | [
        {
          id: number;
          rating: number;
          text: string | null;
          createdAt: string;
          user: {
            commentUserId: number;
            firstName: string;
            lastName: string;
            avatarUrl: string | null;
          };
        }
      ]
    | null;

  booking: {
    id: number;
    order: boolean;
    dateOrder: string | null;
    customerId: number | null;
    customerFirstName: string | null;
    customerLastName: string | null;
  } | null;
  delivery: {
    id: number;
    handed: boolean;
    dateHandedFrom: string | null;
    dateHandedTo: string | null;
    recipientId: number | null;
    recipientFirstName: string | null;
    recipientLastName: string | null;
  } | null;
  histories:
    | [
        {
          id: number | null;
          userId: number | null;
        }
      ]
    | null;
}

export type IComments =
  | [
      {
        id: number;
        rating: number;
        text: string | null;
        createdAt: string;
        user: {
          commentUserId: number;
          firstName: string;
          lastName: string;
          avatarUrl: string | null;
        };
      }
    ];

export type Rating = 'down' | 'up';

export interface ISendReviewRequest {
  data: {
    rating: number;
    text: string;
    book: string;
    user: string;
  };
}

export interface ISendReviewResponse {
  id: number | null;
  attributes: {
    rating: number;
    text: string | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

// Booking

export interface IBookingRequest {
  data: {
    order: boolean;
    dateOrder: string;
    book: string;
    customer: string;
  };
}

export interface IBookingResponse {
  id: number;
  attributes: {
    order: true;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    dateOrder: string;
  };
}

export interface IEditBookingRequest {
  id: number;
  body: {
    data: {
      order: boolean;
      dateOrder: string;
      book: string;
      customer: string;
    };
  };
}

// Autentification

export type RegistrationFormValues = {
  email: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
};

export type AuthFormValues = {
  identifier: string;
  password: string;
};

export type SendEmailFormValues = {
  email: string;
};

export type ResetPasswordFormValues = {
  password: string;
  passwordConfirmation: string;
};

export interface IRegistrationUsrerRequest {
  email: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
}

export interface IUsrerResponse {
  jwt: string;
  user: {
    id: number;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
    firstName: string;
    lastName: string;
    phone: string;
  };
}

export interface IAuthUsrerRequest {
  identifier: string;
  password: string;
}

export interface IUsrer {
  id: number | null;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  firstName: string;
  lastName: string;
  phone: string;
}

export interface IForgotPasswordRequest {
  email: string;
}

export interface IForgotPasswordResponse {
  ok: string;
}

export interface IResetPasswordRequest {
  password: string;
  passwordConfirmation: string;
  code: string;
}

export interface IResetPasswordResponse {
  jwt: string;
  user: {
    id: number;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
    firstName: string;
    lastName: string;
    phone: string;
  };
}
