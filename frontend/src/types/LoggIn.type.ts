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
