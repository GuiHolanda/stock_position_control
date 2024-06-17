import { useQuery } from "@tanstack/react-query";
import { getAuth } from "../api/getAuth";
import { LoginData } from "../types/LoggIn.type";
import { useState } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const authRequest = async (
    router: AppRouterInstance,
    body: LoginData
  ): Promise<void> => {
    setIsLoading(true);

    await getAuth(body)
      .then((result) => {
        router.push("/");
        return result;
      })
      .catch((error) => {
        console.log(error.message);

        return undefined;
      });

    setIsLoading(false);
  };

  return {
    authRequest,
    isLoading,
  };
};
