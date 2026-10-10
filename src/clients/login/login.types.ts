export type LoginUserRequest = {
  username: string;
  password: string;
};

export type LoginUserResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
  user: {
    id: string;
    username: string;
    email: string;
    roles: Array<string>;
  };
};
