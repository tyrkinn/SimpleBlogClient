import {IPost} from 'types';
import {IComment} from 'types';
import {ServerError} from 'types';
import {processServiceError} from 'utils/processServiceError';
import {client} from './axios-client';

export interface IPostService{
  addComment(postId: number, comment: IComment, token: string): Promise<IComment | ServerError>;
  deleteComment(postId: number, commentId: number, token: string): Promise<IComment | ServerError>;
  getAll(): Promise<IPost[] | ServerError>;
  getOne(id: number): Promise<IPost | ServerError>;
  create(model: IPost, token: string): Promise<IPost | ServerError>;
  update(post: IPost, token: string): Promise<IPost | ServerError>;
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
      const response = await client.post<IPost>('/posts', model, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      return response.data;
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
      const response = await client
          .delete<IComment>(`/posts/${postId}/comments/${commentId}`, {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });
      return response.data;
    } catch (e) {
      return processServiceError(e);
    }
  }


  async update(post: IPost, token: string): Promise<ServerError | IPost> {
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
