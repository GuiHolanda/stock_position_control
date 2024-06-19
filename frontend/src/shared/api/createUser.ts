import { doPost } from "../fetcher/AxiosFetcher";
import { CreateUser } from "../types/CreateUser.type";
import { LoggedInUser } from "../types/LoggIn.type";

export const createUser = async (body: CreateUser): Promise<LoggedInUser> => {
  const { data } = await doPost<LoggedInUser, CreateUser>("/user", body);
  return data;
};
