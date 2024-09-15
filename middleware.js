import { NextResponse } from "next/server";

import { getUserMeLoader } from "@utils/services/get-user-me-loader";

export default async function middleware(req) {
  const user = await getUserMeLoader();

  const userRole = user?.data?.role?.type;

  const currentPath = req.nextUrl.pathname;

  if (currentPath.startsWith("/auth")) {
    if (user?.ok) {
      return NextResponse.redirect(new URL(
        "/account", req.nextUrl
      ));
    }
  }

  // if (currentPath.startsWith("/account")) {
  //   if (!user?.ok) {
  //     return NextResponse.redirect(new URL(
  //       "/auth/login", req.nextUrl
  //     ));
  //   }
  // }

  if (currentPath.startsWith("/admin")) {
    if (!user || userRole !== "admin") {
      return NextResponse.redirect(new URL(
        "/not-found", req.nextUrl
      ));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
