import {IPost} from '../types/post.interface';
import {ServerError} from '../types/server-error.interface';
import {RegisterUserDto} from '../types/dto/register-user.dto';
import {LoginUserDto} from '../types/dto/login-user.dto';

export interface IUserService {
  login(user: LoginUserDto): Promise<{token: string} | ServerError>
  register(user: RegisterUserDto): Promise<{token: string} | ServerError>
  starPost(postId: number, token: string): Promise<IPost | ServerError>;
  unstarPost(postId: number, token: string): Promise<IPost | ServerError>;
}
