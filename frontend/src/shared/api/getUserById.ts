import { doGet } from "../helpers/AxiosFetcher";
import { ReturnedUser } from "../types/User.types";

export const getUserById = async (
  userId: number,
  accessToken: string
): Promise<ReturnedUser> => {
  const { data: user } = await doGet<ReturnedUser>(`/user/${userId}`, {
    headers: { Authorization: accessToken, "Content-Type": "application/json" },
  });
  return user;
};
