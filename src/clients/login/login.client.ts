import { API_BASE_URL } from "../../config";
import type { LoginUserRequest, LoginUserResponse } from "./login.types";

const loginClient = async (
  loginUserRequest: LoginUserRequest,
): Promise<LoginUserResponse> => {
  const raw = JSON.stringify({
    username: loginUserRequest.username,
    password: loginUserRequest.password,
  });

  const response = await fetch(API_BASE_URL + "/auth/login", {
    method: "POST",
    body: raw,
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data: LoginUserResponse = await response.json();
  return data;
};

export default loginClient;
