import { doPost } from "../fetcher/AxiosFetcher";
import { LoggedInUser, LoginData } from "../types/LoggIn.type";
import { AxiosError } from "axios";

export const login = async (body: LoginData): Promise<LoggedInUser> => {
  const { data } = await doPost<LoggedInUser, LoginData>("/auth", body);
  return data;
};
