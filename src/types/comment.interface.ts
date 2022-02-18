import {IUser} from './user.interface';

export interface IComment {
  id?: number;
  markdownBody: string;
  author: IUser;
  createdAt: string;
}
