// import { NextRequest, NextResponse } from "next/server";

// export const middleware = async (request: NextRequest) => {
//   return NextResponse.redirect(new URL("/", request.url));
// };

// export const config = {
//   matcher: ["/about/:path*"],
// };

export { default } from "next-auth/middleware";

export const config = { matcher: ["/dashboard"] };
