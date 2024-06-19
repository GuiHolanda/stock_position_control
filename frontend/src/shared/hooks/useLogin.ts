import { login } from "../api/login";
import { LoggedInUser, LoginData } from "../types/LoggIn.type";
import { useState } from "react";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { DefaultResponseError } from "../types/DefaultResponseError.type";
import { encrypt } from "../helpers/encrypting";
import { setAuthorizationToken } from "../helpers/auth";

export const useLogin = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<
    AxiosError<DefaultResponseError> | undefined
  >(undefined);

  const loginMethod = async (body: LoginData): Promise<void> => {
    setIsLoading(true);

    await login(body)
      .then(async (result: LoggedInUser) => {
        setError(undefined);
        setAuthorizationToken(JSON.stringify(result.accessToken));
        router.push("/");
        return result;
      })
      .catch((error) => {
        setError(error.response.data);
      });

    setIsLoading(false);
  };

  return {
    loginMethod,
    isLoading,
    error,
  };
};
