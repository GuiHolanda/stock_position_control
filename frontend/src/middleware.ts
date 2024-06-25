import { NextResponse, type NextRequest } from "next/server";
import { decrypt } from "./shared/helpers/encrypting";
import { cookies } from "next/headers";
import { getUserById } from "./shared/api/getUserById";
import { HOME, LOGIN_PAGE } from "./shared/constants/endpoints";

export async function middleware(request: NextRequest) {
  const accessToken = cookies().get("accessToken")?.value;
  let user = undefined;

  if (accessToken) {
    const payload = await decrypt(accessToken).catch(() => {});

    if (payload) {
      user = await getUserById(payload.id, accessToken).catch((error) => {
        console.log("Error getting the user:");
      });
    }
  }
  if (user && !(request.nextUrl.pathname === HOME)) {
    return Response.redirect(new URL(HOME, request.url));
  }
  if (!user && !request.nextUrl.pathname.startsWith(LOGIN_PAGE)) {
    return NextResponse.rewrite(new URL(LOGIN_PAGE, request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
