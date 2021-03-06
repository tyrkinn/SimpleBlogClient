import {IPost} from 'types';
import {ServerError} from 'types';
import {RegisterUserDto} from 'types/dto';
import {LoginUserDto} from 'types/dto';
import {TokenResponse} from 'types';
import {processServiceError} from 'utils/processServiceError';
import {client} from './axios-client';
import {IUser} from 'types';
import {UpdateUserDto} from 'types/dto';

export interface IUserService {
  login(user: LoginUserDto): Promise<TokenResponse | ServerError>;
  register(user: RegisterUserDto): Promise<TokenResponse | ServerError>;
  starPost(postId: number, token: string): Promise<IPost | ServerError>;
  unstarPost(postId: number, token: string): Promise<IPost | ServerError>;
  get(id: number): Promise<IUser | ServerError>;
  update(user: UpdateUserDto, token: string): Promise<IUser | ServerError>;
  uploadAvatar(avatar: File, token: string): Promise<IUser | ServerError>;
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

  async get(id: number): Promise<IUser | ServerError> {
    try {
      const response = await client.get<IUser>(`users/${id}`);
      return response.data;
    } catch (e) {
      return processServiceError(e);
    }
  }

  async update(user: UpdateUserDto, token: string): Promise<IUser | ServerError> {
    try {
      const response = await client.put<IUser>('/users', user, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (e) {
      return processServiceError(e);
    }
  }

  async uploadAvatar(avatar: File, token: string): Promise<IUser | ServerError> {
    try {
      const formData = new FormData();
      formData.append('image', avatar);
      const response = await client.post<IUser>('/users/avatar', formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (e) {
      return processServiceError(e);
    }
  }
}

export const userService = new UserService();
