import {IPost} from '../types/post.interface';
import {ServerError} from '../types/server-error.interface';
import {RegisterUserDto} from '../types/dto/register-user.dto';
import {LoginUserDto} from '../types/dto/login-user.dto';
import {TokenResponse} from '../types/token-response.interface';
import {client} from './axios-client';
import {processServiceError} from '../utils/processServiceError';

export interface IUserService {
  login(user: LoginUserDto): Promise<TokenResponse | ServerError>;
  register(user: RegisterUserDto): Promise<TokenResponse | ServerError>;
  starPost(postId: number, token: string): Promise<IPost | ServerError>;
  unstarPost(postId: number, token: string): Promise<IPost | ServerError>;
}

class UserService implements IUserService {
  async login(user: LoginUserDto): Promise<TokenResponse | ServerError> {
    try {
      const response = await client.post<TokenResponse>('/login', user);
      return response.data;
    } catch (e) {
      return processServiceError(e);
    }
  }

  async register(user: RegisterUserDto): Promise<TokenResponse | ServerError> {
    try {
      const response = await client.post<TokenResponse>('/register', user);
      return response.data;
    } catch (e) {
      return processServiceError(e);
    }
  }

  async starPost(postId: number, token: string): Promise<IPost | ServerError> {
    try {
      const response = await client.post<IPost>(
          '/favorite',
          {post: postId},
          {
            headers: {'Authorization': `Bearer ${token}`},
          },
      );
      return response.data;
    } catch (e) {
      return processServiceError(e);
    }
  }

  async unstarPost(postId: number, token: string): Promise<IPost | ServerError> {
    try {
      const response = await client.delete<IPost>(
          '/favorite',
          {
            data: {
              post: postId,
              headers: {'Authorization': `Bearer ${token}`},
            },
          },
      );
      return response.data;
    } catch (e) {
      return processServiceError(e);
    }
  }
}

export const userService = new UserService();
