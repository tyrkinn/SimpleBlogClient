import {ICurlService} from '../types/curl-service.interface';
import {IUser} from '../types/user.interface';

export interface IUserService extends ICurlService<IUser>{
  starPost(userId: number, postId: number): void;
  unstarPost(userId: number, postId: number): void;
}
