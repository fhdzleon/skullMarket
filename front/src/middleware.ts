/* import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/cart", "/dashboard"],
}; */

import { NextRequest, NextResponse } from "next/server";
import { PATHROUTES } from "./helpers/PATHROUTES";

export function middleware(request: NextRequest) {
  const user = request.cookies.get("user")?.value;

  console.log(user);

  if (!user) {
    return NextResponse.redirect(new URL(PATHROUTES.LOGIN, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/cart"],
};
