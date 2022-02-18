export interface User {
  id?: number;
  fistName: string;
  lastName: string;
  userName: string;
  role: 'Admin' | 'User';
  avatarLink?: string;
}
