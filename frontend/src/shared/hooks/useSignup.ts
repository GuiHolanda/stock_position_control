import { useState } from "react";
import { createUser } from "../api/createUser";
import { CreateUser } from "../types/User.types";
import { useRouter } from "next/navigation";
import { DefaultResponseError } from "../types/DefaultResponseError.type";
import { AxiosError } from "axios";
import { LOGIN_PAGE } from "../constants/endpoints";

export const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<
    AxiosError<DefaultResponseError> | undefined
  >(undefined);
  const router = useRouter();

  const signup = async (body: CreateUser) => {
    setIsLoading(true);

    await createUser(body)
      .then((result) => {
        setError(undefined);
        router.push(LOGIN_PAGE);
        return result;
      })
      .catch((error) => {
        setError(error.response.data);
      });

    setIsLoading(false);
  };

  return {
    signup,
    isLoading,
    error,
  };
};
