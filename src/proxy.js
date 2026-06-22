import { NextResponse } from "next/server";

export function proxy(request) {
  const url = request?.url ? new URL(request.url) : null;
  const pathname = request?.nextUrl?.pathname || url?.pathname || "/";
  const isServicePage =
    typeof pathname === "string" && pathname.startsWith("/services");

  const dummyUserData = {
    role: "user",
    email: "test@admin.com",
  };
  const isAdmin = dummyUserData.role === "admin";

  if (isServicePage && !isAdmin && url) {
    return NextResponse.redirect(new URL("/login", url));
  }

  return NextResponse.next();
}

/* export const config = {
  matcher: '/about/:path*',
} */

/* 
 jokhon pathname service thakbe && role admin thakbe na tokhon redirect kore login / home e pathay dibo
amra redirect / rewrite korte parbo
rewrite amar route name change korbena, services page e jete chacchi kintu ami user so amak login page show korbe but route would be http://localhost:3000/services
URL + page duita e change korbe redirect
    login korar por je service page er access chacchilo ekTa refresh korlei oi route e direct korbe "rewrite" er through te
*/
