import {atom} from 'jotai';
import {User} from '../types/user.interface';

export interface Authorized {
  isAuthorized: true,
  user: User,
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
