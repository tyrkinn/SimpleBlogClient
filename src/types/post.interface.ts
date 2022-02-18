import {User} from './user.interface';

export interface Post {
  id?: number;
  title: string;
  markdownBody: string;
  imageLink: string;
  createdBy: User;
  createdAt: Date;
}
