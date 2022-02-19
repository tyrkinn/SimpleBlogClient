import {ICurlService} from 'types/curl-service.interface';
import {IPost} from 'types/post.interface';
import {IComment} from 'types/comment.interface';
import {client} from './axios-client';
import {ServerError} from '../types/server-error.interface';
import {processServiceError} from '../utils/processServiceError';

export interface IPostService extends ICurlService<IPost>{
  addComment(postId: number, comment: IComment): Promise<IComment | ServerError>;
  deleteComment(postId: number, commentId: number): Promise<IComment | ServerError>;
}

class PostService implements IPostService {
  async getAll(): Promise<IPost[] | ServerError> {
    try {
      const response = await client.get<IPost[]>('/posts');
      return response.data;
    } catch (e) {
      return processServiceError(e);
    }
  }

  async addComment(postId: number, comment: IComment): Promise<IComment | ServerError> {
    try {
      const response = await client.post<IComment>(`/posts/${postId}/comments`, comment);
      return response.data;
    } catch (e) {
      return processServiceError(e);
    }
  }

  async create(model: IPost): Promise<ServerError | IPost> {
    try {
      const resonse = await client.post<IPost>('/posts', model);
      return resonse.data;
    } catch (e) {
      return processServiceError(e);
    }
  }

  async delete(id: number): Promise<ServerError | IPost> {
    try {
      const response = await client.delete<IPost>(`/posts/${id}`);
      return response.data;
    } catch (e) {
      return processServiceError(e);
    }
  }

  async deleteComment(postId: number, commentId: number): Promise<IComment | ServerError> {
    try {
      const resonse = await client
          .delete<IComment>(`/posts/${postId}/comments/${commentId}`);
      return resonse.data;
    } catch (e) {
      return processServiceError(e);
    }
  }

  async getOne(id: number): Promise<ServerError | IPost> {
    try {
      const response = await client
          .get<IPost>(`/posts/${id}`);
      return response.data;
    } catch (e) {
      return processServiceError(e);
    }
  }

  async update(id: number): Promise<ServerError | IPost> {
    try {
      const response = await client
          .put<IPost>(`/posts/${id}`);
      return response.data;
    } catch (e) {
      return processServiceError(e);
    }
  }
}

export const postService = new PostService();
