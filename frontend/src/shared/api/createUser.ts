import { doPost } from "../helpers/AxiosFetcher";
import { CreateUser, LoggedInUser } from "../types/User.types";

export const createUser = async (body: CreateUser): Promise<LoggedInUser> => {
  const { data } = await doPost<LoggedInUser, CreateUser>("/user", body);
  return data;
};
