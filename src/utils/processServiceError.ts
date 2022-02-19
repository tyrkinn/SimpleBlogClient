import axios, {AxiosError} from 'axios';
import {ServerError} from '../types/server-error.interface';

export const processServiceError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const serverError = error as AxiosError<ServerError>;
    if (serverError && serverError.response) {
      return serverError.response.data;
    }
  }
  return {error: {message: 'Something went wrong!'}};
};
