import {ICurlService} from '../types/curl-service.interface';
import {User} from '../types/user.interface';

export interface IUserService extends ICurlService<User>{
  starPost(userId: number, postId: number): void;
  unstarPost(userId: number, postId: number): void;
}
