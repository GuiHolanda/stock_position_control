import { doPost } from "../helpers/AxiosFetcher";
import { LoginData, LoggedInUser } from "../types/User.types";

export const login = async (body: LoginData): Promise<LoggedInUser> => {
  const { data } = await doPost<LoggedInUser, LoginData>("/auth", body);
  return data;
};
