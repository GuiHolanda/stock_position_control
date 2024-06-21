import { NextResponse, type NextRequest } from "next/server";
import { redirect } from "next/navigation";
import { decrypt } from "./shared/helpers/encrypting";
import { cookies } from "next/headers";
import { getUserById } from "./shared/api/getUserById";
import { goToAuth } from "./app/lib/actions";

export async function middleware(request: NextRequest) {
  console.log("ENTROU NO MIDDLEWARE");

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
  if (user && !(request.nextUrl.pathname === "/")) {
    console.log("MIDDLEWARE -> REDIRECTING TO HOME");

    return Response.redirect(new URL("/", request.url));
  }
  if (!user && !request.nextUrl.pathname.startsWith("/auth")) {
    console.log("MIDDLEWARE -> REDIRECTING TO AUTH");
    return NextResponse.rewrite(new URL("/auth", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
