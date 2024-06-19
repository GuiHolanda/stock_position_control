import { useState } from "react";
import { createUser } from "../api/createUser";
import { CreateUser } from "../types/CreateUser.type";
import { useRouter } from "next/navigation";
import { DefaultResponseError } from "../types/DefaultResponseError.type";
import { AxiosError } from "axios";

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
        router.push("/auth");
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
