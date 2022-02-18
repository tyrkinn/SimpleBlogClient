import {atom} from 'jotai';
import {IUser} from '../types/user.interface';

export interface Authorized {
  isAuthorized: true,
  user: IUser,
}

export interface NotAuthorized {
  isAuthorized: false,
  user: null
}

export type AuthAtomType = Authorized | NotAuthorized;

export const authAtom = atom<AuthAtomType>({
  isAuthorized: false,
  user: null,
});
