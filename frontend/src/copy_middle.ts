import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { middleware as activatedMiddleware } from "./middleware/config";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Map through activated middleware functions
  debugger;
  const middlewareFunctions = activatedMiddleware.map((fn) => fn(request));

  // Array to store middleware headers
  const middlewareHeader: Headers[] = [];

  // Loop through middleware functions
  middlewareFunctions.map(async (middleware) => {
    // Execute middleware function and await the result
    const result = await middleware;

    // Check if the result is not okay and return it
    if (!result?.ok) {
      return result;
    }

    // Push middleware headers to the array
    middlewareHeader.push(result?.headers);
  });

  //First we are going to define a redirectTo variable
  let redirectTo = null;

  middlewareHeader.some((header) => {
    // Look for the 'x-middleware-request-redirect' header
    const redirect = header.get("x-middleware-request-redirect");

    if (redirect) {
      // If a redirect is found, store the value and break the loop
      redirectTo = redirect;
      return true; // Break the loop
    }
    // Continue to the next header in case the redirect header is not found
    return false; // Continue the loop
  });
  if (redirectTo) {
    // Perform the redirection
    return NextResponse.redirect(new URL(redirectTo, request.url), {
      status: 307, // Use the appropriate HTTP status code for the redirect
    });
  }
  return NextResponse;
}
