import {IUser} from 'types';

export type UpdateUserDto = Partial<Pick<IUser, 'userName' | 'fistName' | 'lastName'>>
