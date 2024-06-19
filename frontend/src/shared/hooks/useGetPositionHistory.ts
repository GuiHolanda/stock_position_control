import { useQuery } from "@tanstack/react-query";
import { getPositionHistory } from "../api/getPositionHistory";

export const useGetPositionHistory = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["useGetPositionHistory"],
    queryFn: () => getPositionHistory(),
  });

  return {
    data,
    isLoading,
    error,
  };
};
