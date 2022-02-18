export interface ICurlService<T> {
  getAll(): T[];
  getOne(id: number): T;
  create(model: T): void;
  update(id: number): void;
  delete(id: number): void;
}
