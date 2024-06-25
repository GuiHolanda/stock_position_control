"use server";
import { redirect } from "next/navigation";
import { login } from "../../shared/api/login";
import { cookies } from "next/headers";
import { LoggedInUser, LoginData } from "../../shared/types/User.types";
import { HOME } from "../../shared/constants/endpoints";

export async function authenticate(formData: LoginData) {
  await login(formData)
    .then(async (result: LoggedInUser) => {
      const accessToken = result.accessToken;
      cookies().set("accessToken", accessToken, { httpOnly: true });
      redirect(HOME);
    })
    .catch((error) => {
      throw error;
    });
}
