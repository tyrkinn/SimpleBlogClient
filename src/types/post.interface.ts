import {IUser} from './user.interface';

export interface IPost {
  id?: number;
  title: string;
  markdownBody: string;
  imageLink: string;
  createdBy: IUser;
  createdAt: string;
}
