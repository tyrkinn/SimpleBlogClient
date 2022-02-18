export interface User {
  fistName: string;
  lastName: string;
  userName: string;
  role: 'Admin' | 'User';
  avatarLink?: string;
}
