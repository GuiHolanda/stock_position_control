import { login } from "../api/login";
import { useState } from "react";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { DefaultResponseError } from "../types/DefaultResponseError.type";
import { LoginData, LoggedInUser } from "../types/User.types";

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
