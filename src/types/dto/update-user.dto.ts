import {IUser} from '../user.interface';

export type UpdateUserDto = Partial<Pick<IUser, 'userName' | 'fistName' | 'lastName'>>
