import { useState } from "react";
import loginClient from "../clients/login/login.client";
import type { LoginUserRequest } from "../clients/login/login.types";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const onLogin = (user: LoginUserRequest) => {
    setLoading(true);
    loginClient(user).then((data) => {
      console.log("Respuesta del servidor:", data); 
      setEmail(data.user.email);
      setLoading(false);
    });
  };

  return {
    loading,
    email,
    onLogin,
  };
};

export default useLogin;
