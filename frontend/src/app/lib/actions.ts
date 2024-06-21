"use server";
import { redirect } from "next/navigation";
import { login } from "../../shared/api/login";
import { LoggedInUser, LoginData } from "../../shared/types/LoggIn.type";
import { cookies } from "next/headers";

export async function authenticate(formData: LoginData) {
  console.log("ENTROU NO ACTION");

  await login(formData)
    .then(async (result: LoggedInUser) => {
      const accessToken = result.accessToken;
      console.log("SETTING NEW COOKIE");

      cookies().set("accessToken", accessToken, { httpOnly: true });
      console.log("ACTION -> REDIRECTING TO HOME");
      redirect("/");
    })
    .catch((error) => {
      throw error;
    });
}

export async function goToAuth() {
  return redirect("/auth");
}
