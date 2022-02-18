export interface ICurlService<T> {
  getAll(): T[];
  getOne(id: number): T;
  create(model: T): T;
  update(id: number): T;
  delete(id: number): T;
}
