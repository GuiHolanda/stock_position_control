import { NextRequest } from "next/server";
import { getAuthorizationToken } from "../shared/helpers/auth";
import { decrypt } from "../shared/helpers/encrypting";

interface AuthPayload {
  id: number;
  typeUser: "admin" | "user";
  expirationDate: Date;
}

export async function AuthorizationMiddleware(request: NextRequest) {
  debugger;
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidHlwZVVzZXIiOiJhZG1pbiIsImV4cGlyYXRpb25EYXRlIjoiMjAyNC0wNi0xOVQxNDo0MTowMy40MzBaIiwiaWF0IjoxNzE4ODA4MDAzLCJleHAiOjE3MTg4MDgwNjN9.UrRd8qFpAn0siJmY4RWK5Rqu3DEJVMe4sZ2vYtFZMWU";
  let isTokenValid = false;
  // if (accessToken) {
  //   const payload: AuthPayload = await decrypt(accessToken);
  //   isTokenValid = payload.expirationDate > new Date();
  // }

  if (isTokenValid && !request.nextUrl.pathname.startsWith("/")) {
    return Response.redirect(new URL("/", request.url));
  }

  if (!isTokenValid && !request.nextUrl.pathname.startsWith("/auth")) {
    return Response.redirect(new URL("/auth", request.url));
  }
}
