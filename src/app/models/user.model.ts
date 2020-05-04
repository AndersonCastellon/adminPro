export interface User {
  name: string;
  email: string;
  password: string;
  photo?: string;
  role?: string;
  google?: boolean;
  _id?: string;
}
