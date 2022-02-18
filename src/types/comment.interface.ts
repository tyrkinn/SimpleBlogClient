import {User} from './user.interface';

export interface Comment {
  id?: number;
  markdownBody: string;
  author: User;
  createdAt: string;
}
