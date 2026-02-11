import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const token = req.cookies.get("accessToken")?.value;

  const protectedRoute = ["/dashboard"];
  const isProtected = protectedRoute.some((route) => {
    return req.nextUrl.pathname.startsWith(route);
  });
  if (!token && isProtected) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
export const config = {
  matcher: ["/dashborad/:path*"],
};
