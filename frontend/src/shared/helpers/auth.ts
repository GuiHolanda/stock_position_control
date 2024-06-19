import { ACCESS_TOKEN } from "../constants";
import { removeItemStorage, setItemStorage, getItemStorage } from "./sessions";

export const unsetAuthorizationToken = () => removeItemStorage(ACCESS_TOKEN);

export const setAuthorizationToken = (token?: string) => {
  if (token) {
    setItemStorage(ACCESS_TOKEN, token);
  }
};

export const getAuthorizationToken = () => getItemStorage(ACCESS_TOKEN);
