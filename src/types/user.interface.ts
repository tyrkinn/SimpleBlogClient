export interface IUser {
  id?: number;
  fistName: string;
  lastName: string;
  userName: string;
  role: 'Admin' | 'User';
  avatarLink?: string;
}
