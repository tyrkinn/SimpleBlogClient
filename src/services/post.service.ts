import {IPost} from 'types/post.interface';
import {IComment} from 'types/comment.interface';
import {client} from './axios-client';
import {ServerError} from '../types/server-error.interface';
import {processServiceError} from '../utils/processServiceError';

export interface IPostService{
  addComment(postId: number, comment: IComment, token: string): Promise<IComment | ServerError>;
  deleteComment(postId: number, commentId: number, token: string): Promise<IComment | ServerError>;
  getAll(): Promise<IPost[] | ServerError>;
  getOne(id: number): Promise<IPost | ServerError>;
  create(model: IPost, token: string): Promise<IPost | ServerError>;
  update(id: number, post: IPost, token: string): Promise<IPost | ServerError>;
  delete(id: number, token: string): Promise<IPost | ServerError>;
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

  async getOne(id: number): Promise<ServerError | IPost> {
    try {
      const response = await client
          .get<IPost>(`/posts/${id}`);
      return response.data;
    } catch (e) {
      return processServiceError(e);
    }
  }

  async create(model: IPost, token: string): Promise<ServerError | IPost> {
    try {
      const resonse = await client.post<IPost>('/posts', model, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      return resonse.data;
    } catch (e) {
      return processServiceError(e);
    }
  }

  async delete(id: number, token: string): Promise<ServerError | IPost> {
    try {
      const response = await client.delete<IPost>(`/posts/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (e) {
      return processServiceError(e);
    }
  }

  async addComment(postId: number, comment: IComment, token: string): Promise<IComment | ServerError> {
    try {
      const response = await client.post<IComment>(`/posts/${postId}/comments`, comment, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (e) {
      return processServiceError(e);
    }
  }

  async deleteComment(postId: number, commentId: number, token: string): Promise<IComment | ServerError> {
    try {
      const resonse = await client
          .delete<IComment>(`/posts/${postId}/comments/${commentId}`, {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });
      return resonse.data;
    } catch (e) {
      return processServiceError(e);
    }
  }


  async update(id: number, post: IPost, token: string): Promise<ServerError | IPost> {
    try {
      const response = await client
          .put<IPost>(`/posts`, post, {
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

export const postService = new PostService();
