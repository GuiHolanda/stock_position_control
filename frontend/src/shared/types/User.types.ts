export interface CreateUser {
  email: string;
  name: string;
  password: string;
}

export interface LoggedInUser {
  accessToken: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
}

export interface LoginData {
  email: string;
  password: string;
}

export interface ReturnedUser {
  id: number;
  name: string;
  email: string;
}
