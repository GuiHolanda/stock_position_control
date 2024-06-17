import { AuthorizationType, doGet, doPost } from "../fetcher/AxiosFetcher";
import { LoggedInUser, LoginData } from "../types/LoggIn.type";

export const getAuth = async (body: LoginData): Promise<LoggedInUser> => {
  const { data } = await doPost<LoggedInUser, LoginData>(
    AuthorizationType.BUYER,
    "/auth",
    body
  );
  return data;
};
