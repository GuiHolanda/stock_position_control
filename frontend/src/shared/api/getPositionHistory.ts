import { doGet } from "../fetcher/AxiosFetcher";
import { PositionHistory } from "../types/PositionHistory.type";

export const getPositionHistory = async (): Promise<PositionHistory> => {
  const { data } = await doGet<PositionHistory>("/position-history");
  return data;
};
