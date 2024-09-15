import { NextResponse } from "next/server";

import { getCurrentUser } from "@api/users";

export default async function middleware(req) {
  const user = await getCurrentUser();

  const userRole = user?.role?.type;

  if (req.nextUrl.pathname.startsWith("/auth")) {
    if (user?.confirmed && !user?.blocked) {
      return NextResponse.redirect(new URL(
        "/account", req.nextUrl
      ));
    }
  }

  if (req.nextUrl.pathname.startsWith("/account")) {
    if (!(user?.confirmed && !user?.blocked)) {
      return NextResponse.redirect(new URL(
        "/auth/login", req.nextUrl
      ));
    }
  }

  if (req.nextUrl.pathname.startsWith("/admin")) {
    if (!(user?.confirmed && !user?.blocked) || userRole !== "admin") {
      return NextResponse.redirect(new URL(
        "/not-found", req.nextUrl
      ));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/auth/:path*',
    '/account',
    '/((?!api|_next/static|_next/image|.*\\.png$).*)'
  ],
};
