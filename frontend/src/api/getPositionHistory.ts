import { AuthorizationType, doGet } from "../fetcher/AxiosFetcher";
import { PositionHistory } from "../types/PositionHistory.type";

export const getPositionHistory = async (): Promise<PositionHistory> => {
  const { data } = await doGet<PositionHistory>(
    AuthorizationType.BUYER,
    "/position-history"
  );
  return data;
};
