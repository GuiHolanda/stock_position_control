// import { cookies } from "next/headers";
// import { decrypt } from "./encrypting";

// export async function getAccessTokenFromCookie() {
//   const accessToken = cookies().get("accessToken")?.value;
//   if (!accessToken) return null;
//   return await decrypt(accessToken);
// }

export const setItemStorage = (key: string, value: string) =>
  localStorage.setItem(key, value);

export const removeItemStorage = (key: string) => localStorage.removeItem(key);

export const getItemStorage = (key: string) => localStorage.getItem(key);
