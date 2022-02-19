import {ServerError} from './server-error.interface';

export interface ICurlService<T> {
  getAll(): Promise<T[] | ServerError>;
  getOne(id: number): Promise<T | ServerError>;
  create(model: T): Promise<T | ServerError>;
  update(id: number): Promise<T | ServerError>;
  delete(id: number): Promise<T | ServerError>;
}
